import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

export const Navbar = () => {
    return (
        <section>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#/">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#analysis">Analysis</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#predictions">Predictions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <ul className="navbar-nav d-flex flex-column">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#data">Data</a></li>
                    <li className="nav-item"><a className="nav-link" href="#analysis">Analysis</a></li>
                    <li className="nav-item"><a className="nav-link" href="#predictions">Predictions</a></li>
                </ul>
            </nav>
        </section>
    )
}
