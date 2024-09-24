import React from 'react';
import { Nav, Breadcrumb } from 'react-bootstrap';

export const BreadCrumb = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#analysis">Form</Breadcrumb.Item>
        </Breadcrumb>
    )
}