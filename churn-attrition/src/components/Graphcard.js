import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureImpt from './FeatureImpt';
import CorrMatrix from './CorrMatrix';

export const GraphCard = () => {
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState(null);
    const [error, setError] = useState(null);
    const URL = "http://127.0.0.1:8000/api/churn_app/churn_analysis/";

    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setPageData(data)
                console.log(pageData);
            } catch (err) {
                setError(err)
                console.log('Error occured: ', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData()
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h1>Churn Attrition Dashboard Analytics</h1>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container fluid>
            <h1>Churn Attrition Dashboard Analytics</h1>
            <Row>
                <Col>
                    <div className="feature">
                        <FeatureImpt featureData={pageData.feature} />
                    </div>
                </Col>
                <Col>
                    <div className="corr">
                        <CorrMatrix matrixData={pageData.matrix} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <PieChart pieData={pageData.pie}/> */}
                </Col>
                <Col>
                    {/* <CorrMatrix someData={pageData.matrix} /> */}
                </Col>
            </Row>
        </Container>
    )
}