import React, { useEffect } from 'react'
import * as d3 from 'd3';

export default function CorrMatrix ({ matrixData }) {
    useEffect(() => {
            d3.select("#corr-matrix-chart").selectAll("svg").remove();

        const features = matrixData.map(item => item.Feature);
        const chi2Values = matrixData.map(item => item['Chi2 Statistic']);

        const width = 400;
        const height = 300;
        const margin = { top: 50, right: 0, bottom: 50, left: 90 };

        const svg = d3.select("#corr-matrix-chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const colorScale = d3.scaleSequential()
            .interpolator(d3.interpolateBlues)
            .domain([0, d3.max(chi2Values)]);

        const x = d3.scaleBand()
            .range([0, width])
            .domain(features)
            .padding(0.01);

        const y = d3.scaleBand()
            .range([height, 0])
            .domain(features)
            .padding(0.01);

        svg.append("g")
            .selectAll("rect")
            .data(matrixData)
            .enter()
            .append("rect")
            .attr("x", d => x(d.Feature))
            .attr("y", d => y(d.Feature))
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", d => colorScale(d['Chi2 Statistic']));

        svg.append("g")
            .call(d3.axisTop(x))
            .selectAll("text")
            .attr("width", "154")
            .attr("dy", "-1.2em")
            .attr("transform", "rotate(-25)");

        svg.append("g")
            .call(d3.axisLeft(y));
        }, [matrixData]);    

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Correlation Matrix</h1>
            <div id="corr-matrix-chart"></div>
        </div>
    )
}