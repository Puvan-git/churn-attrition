import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export const GraphCard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch churn analysis results from Django backend
        fetch('api/churn/churn_analysis/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching churn analysis: ', error));
    }, []);

    if (!data) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <Container fluid>
            <h1>Churn Attrition Dashboard Analytics</h1>
            <p>Total Cusotmers: {data.total_customers}</p>
            <p>Churned Customers: {data.churned_customers}</p>
            <p>Churn Rate: {data.churn_rate}</p>
        </Container>
    )
}