import React, { useEffect } from 'react'
import * as d3 from 'd3';

export default function FeatureImpt({ featureData }) {
    useEffect(() => {
        d3.select("#feature-impt-chart").selectAll("svg").remove();

        // Set up D3 chart when component mounts
        const data = featureData.feature_importances.map((importance, index) => ({
            name: featureData.feature_names[index],
            importance: importance
        }));

        const width = 400;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 40, left: 90 };

        const svg = d3.select("#feature-impt-chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.importance)])
            .range([0, width - margin.left - margin.right]);

        const y = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([0, height - margin.top - margin.bottom])
            .padding(0.1);

        svg.append("g")
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", d => y(d.name))
            .attr("width", d => x(d.importance))
            .attr("height", y.bandwidth())
            .attr("fill", "steelblue");

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("g")
            .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x));

        }, [featureData]);
            

    return (
        <div>
            <h1>Feature Importances</h1>
            <div id='feature-impt-chart'></div>
        </div>
    )
}
