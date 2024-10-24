import pandas as pd
import matplotlib.pyplot as plt
import scipy.stats
import sklearn
import sklearn.compose
import sklearn.ensemble
import sklearn.preprocessing
import numpy as np


def feature_eng(feature1, feature2):
    # Aggregate the financial data by CLIENTNUM
    finance_aggregated = feature1.groupby('CLIENTNUM').agg({
        'Trans_Amount': 'sum',  # Summing up all transactions per client
        'Revenue': 'sum',       # Summing up all revenue per client
        'No_of_Customers': 'sum', # more aggregation functions can be added for other columns if necessary
    }).reset_index()

    # Filter rows for the year 2019
    info_2019 = feature2[feature2['Year'] == 2019]

    # Sort the data by 'Quarter' and drop duplicates to keep only the latest entry per customer
    info_2019 = info_2019.sort_values('Quarter').drop_duplicates('CLIENTNUM', keep='last')

    return info_2019, finance_aggregated

def segregation():
    # Define numerical columns (excluding 'CLIENTNUM' and 'Attrition_Flag')
    numerical_cols = ['Customer_Age', 'Dependent_count', 'Months_on_book', 'Total_Relationship_Count', 
                    'Months_Inactive_12_mon', 'Contacts_Count_12_mon', 'Credit_Limit', 'Total_Revolving_Bal',
                    'Avg_Open_To_Buy', 'Total_Trans_Ct', 'Avg_Utilization_Ratio', 'Trans_Amount', 'Revenue']

    # Define categorical columns (excluding 'CLIENTNUM' and 'Attrition_Flag')
    categorical_cols = ['Gender', 'Education_Level', 'Marital_Status', 'Income_Category', 
                        'Card_Category', 'Quarter', 'Date_Leave']
    
    return numerical_cols, categorical_cols

def chi_square_test(combined_df, categorical_cols):
    # Perform Chi-Squared tests and store results in a dictionary
    chi2_stats = []
    p_values = []
    features = []

    # Perform Chi-Squared tests for categorical features against target variable Attrition_Flag
    for feature in categorical_cols:
        contingency = pd.crosstab(combined_df[feature], combined_df['Attrition_Flag'])
        chi2, p, _, _ = scipy.stats.chi2_contingency(contingency, correction=False)
        chi2_stats.append(chi2)
        p_values.append(p)
        features.append(feature)

    return (pd.DataFrame({
        'Feature': features,
        'Chi2 Statistic': chi2_stats,
        'p-value': p_values
    }))


def correlation_matrix():
    # Convert the lists to a DataFrame
    chi2_results_df = chi_square_test(combined_df, categorical_cols)

    # Sort the DataFrame by the p-value
    chi2_results_df = chi2_results_df.sort_values('p-value').reset_index(drop=True)

    # Return churn analysis results as a dictionary
    return chi2_results_df

def feature_importance():
    # Drop features that have a correlation coefficient > 0.8 and p-value > 0.05
    features_to_drop = ['CLIENTNUM', 'Avg_Open_To_Buy', 'Revenue', 'Trans_Amount', 'Credit_Limit', 'Card_Category', 'Education_Level', 'Income_Category', 'Gender', 'Quarter', 'Date_Leave']
    X = combined_df.drop(features_to_drop + ['Attrition_Flag'], axis=1)
    y = combined_df['Attrition_Flag']

    X_categorical = ['Marital_Status']

    # Convert the target variable to binary format
    le = sklearn.preprocessing.LabelEncoder()
    y_encoded = le.fit_transform(y)  # This will convert 'Attrited Customer' to 1 and 'Existing Customer' to 0

    # Apply One-Hot Encoding
    ct = sklearn.compose.ColumnTransformer(transformers=[('encoder', sklearn.preprocessing.OneHotEncoder(), X_categorical)], remainder='passthrough')
    X_encoded = ct.fit_transform(X)

    # Split the dataset into the Training set and Test set
    # random_state = 42, is a statement that ensures consistency whenever cell is run
    X_train, X_test, y_train, y_test = sklearn.model_selection.train_test_split(X_encoded, y_encoded, test_size=0.3, random_state=42)

    # Initialize the Random Forest Classifier
    rf_classifier = sklearn.ensemble.RandomForestClassifier(random_state=42)

    # Fit the model on training data
    rf_classifier.fit(X_train, y_train)

    y_pred = rf_classifier.predict(X_test)

    # Calculate the metrics using the appropriate averages for imbalanced classes
    f1 = sklearn.metrics.f1_score(y_test, y_pred, average='weighted')  # Use 'weighted' to account for class imbalance
    precision = sklearn.metrics.precision_score(y_test, y_pred, average='weighted')
    recall = sklearn.metrics.recall_score(y_test, y_pred, average='weighted')

    # Feature importances
    feature_importances = rf_classifier.feature_importances_

    feature_names = ct.get_feature_names_out()

    return {
        'feature_importances': feature_importances.tolist(),
        'f1': f1,        
        'precision': precision,
        'recall': recall,
        'feature_names': feature_names.tolist(),
    }
    

# Load the dataset from the CSV file
file = '/Users/puvan/Desktop/CS/projects/churn-attrition/churn-attrition/src/backend/churn_app/credit_2018_2019.xlsx'

data = pd.read_excel(file, sheet_name=None, engine='openpyxl')

# Access DataFrames using the sheet names as keys
finance_all = data['Finance_all']
info_all = data['info_all']

info_2019, finance_aggregated = feature_eng(finance_all, info_all)

numerical_cols, categorical_cols = segregation()

# Merge the processed info data with the finance data
combined_df = pd.merge(info_2019, finance_aggregated, on='CLIENTNUM', how='inner')

# Create a feature that represents customer loyalty
combined_df['Loyalty_Score'] = combined_df['Total_Trans_Ct'] / combined_df['Months_on_book']

# Continuing from previous preprocessing steps with the additional Loyalty_Score feature
numerical_cols = numerical_cols + ['Loyalty_Score'] 