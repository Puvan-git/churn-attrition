import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureImpt from './FeatureImpt';
import CorrMatrix from './CorrMatrix';

export const GraphCard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch churn analysis results from Django backend
        fetch('http://127.0.0.1:8000/api/churn_app/churn_analysis/')
            .then(response => response.json())
            .then( (data) => {
                setData(data)
                console.log(data.matrix)
            })
            .catch(error => console.error('Error fetching churn analysis: ', error));
    }, []);

    if (!data) {
        return (
            <div className="loading">
                <h1>Churn Attrition Dashboard Analytics</h1>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <Container fluid>
            <h1>Churn Attrition Dashboard Analytics</h1>
            <Row>
                <Col>
                    <FeatureImpt featureData={data.feature} />  
                </Col>
                <Col>
                    <CorrMatrix matrixData={data.matrix} /> 
                </Col>
            </Row>
        </Container>
    )
}