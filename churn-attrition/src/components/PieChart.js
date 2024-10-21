import React, { useEffect } from 'react'
import * as d3 from 'd3';

export default function PieChart( pieData ) {
    useEffect(() => {
        d3.select("#pie-chart").selectAll("svg").remove();

    }, [])

    return (
        <div>
            <h1>Pie Chart</h1>
            <div id="pie-chart"></div>
        </div>
    )
}