import React from 'react'

export const SideBar = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <ul className="navbar-nav d-flex flex-column">
                    <li className="nav-item"><a className="nav-link" href="#data">Data</a></li>
                    <li className="nav-item"><a className="nav-link" href="#analysis">Analysis</a></li>
                </ul>
            </nav>
        </div>
    )
}