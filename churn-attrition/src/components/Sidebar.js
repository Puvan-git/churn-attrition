import React from 'react'

export const SideBar = () => {
    return (
        <div className='container-fluid'>
            <nav className="sidebar navbar navbar-expand-lg navbar-light ">
                <ul className="sidebar-text navbar-nav d-flex flex-column wrap">
                    <li className="nav-item"><a className="nav-link" href="#data">Data</a></li>
                    <li className="nav-item"><a className="nav-link" href="#analysis">Analysis</a></li>
                </ul>
            </nav>
        </div>
    )
}