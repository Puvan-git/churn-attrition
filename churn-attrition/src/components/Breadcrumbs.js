import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const Breadcrumbs = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#analysis">Form</Breadcrumb.Item>
        </Breadcrumb>
    )
}