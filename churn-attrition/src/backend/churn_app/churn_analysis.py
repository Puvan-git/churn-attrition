import pandas as pd
import matplotlib.pyplot as plt

def churn_analysis():
    # Load the dataset from the CSV file
    data = pd.read_csv('customer_data.csv')
    
    # Separate churned and active customers
    churned_customers = data[data['churn'] == 1]
    active_customers = data[data['churn'] == 0]
    
    # Calculate churn rate
    churn_rate = len(churned_customers) / len(data)

    # Generate a basic bar plot of churned vs active customers
    plt.figure(figsize=(8, 6))
    data['churn'].value_counts().plot(kind='bar')
    plt.title('Churn vs Active Customers')
    plt.xlabel('Customer Status (0 = Active, 1 = Churned)')
    plt.ylabel('Count')
    plt.savefig('churn_analysis.png')  # Save the plot to a file

    # Return churn analysis results as a dictionary
    return {
        'churn_rate': churn_rate,
        'total_customers': len(data),
        'churned_customers': len(churned_customers),
        'active_customers': len(active_customers)
    }
