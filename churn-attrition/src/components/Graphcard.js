import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";

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
            <div>
                <h1>Churn Attrition Dashboard Analytics</h1>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <Container fluid>
            <h1>Churn Attrition Dashboard Analytics</h1>
            <p>Total Customers: {data.total_customers}</p>
            <p>Churned Customers: {data.churned_customers}</p>
            <p>Churn Rate: {data.churn_rate}</p>
        </Container>
    )
}