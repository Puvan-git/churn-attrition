import pandas as pd
import matplotlib.pyplot as plt

def churn_analysis():
    # Load the dataset from the CSV file
    data = pd.read_csv('/Users/puvan/Desktop/CS/projects/churn-attrition/churn-attrition/src/backend/churn_app/customer_data.csv')
    
    # Separate churned and active customers
    churned_customers = data[data['churn'] == 1]
    active_customers = data[data['churn'] == 0]
    
    # Calculate churn rate
    churn_rate = len(churned_customers) / len(data)

    return {
        'churn_rate': churn_rate,
        'total_customers': len(data),
        'churned_customers': len(churned_customers),
        'active_customers': len(active_customers)
    }
