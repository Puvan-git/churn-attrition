import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

export const GraphCard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch churn analysis results from Django backend
        fetch('http://127.0.0.1:8000/api/churn_app/churn_analysis/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching churn analysis: ', error));
    }, []);

    if (!data) {
        return (
            <div>Loading...</div>
        );
    }

    const chartData = {
        labels: ['Churned Customers', 'Active Customers'],
        datasets: [
            {
                label: 'Customer Count',
                data: [data.churned_customers, data.active_customers],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };        


    return (
        <Container fluid>
            <h1>Churn Attrition Dashboard Analytics</h1>
            <p>Total Cusotmers: {data.total_customers}</p>
            <p>Churned Customers: {data.churned_customers}</p>
            <p>Churn Rate: {data.churn_rate}</p>
            <Bar data={chartData}/>
        </Container>
    )
}