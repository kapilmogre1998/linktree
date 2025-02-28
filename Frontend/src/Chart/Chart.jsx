import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ChartPreview = () => {
  const svgRef = useRef(null);
  
  // CSS variables for styling
  const cssVars = {
    primaryColor: '#28a263',
    backgroundColor: '#000000',
    inputBackground: '#eff0ec',
    buttonBackground: '#e0e2d9',
    buttonText: '#a8aaa2',
    footerText: '#676b5f',
    imageBackground: '#254f1a',
  };

  // Chart data
  const data = [
    { month: 'Jan', value: 1500 },
    { month: 'Feb', value: 800 },
    { month: 'Mar', value: 1200 },
    { month: 'Apr', value: 1800 },
    { month: 'May', value: 2800 },
    { month: 'Jun', value: 2200 },
    { month: 'Jul', value: 2500 }
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = svgRef.current.clientWidth - margin.left - margin.right;
    const height = svgRef.current.clientHeight - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X scale
    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.1);

    // Y scale
    const y = d3.scaleLinear()
      .domain([0, 3000])
      .range([height, 0]);

    // Create x-axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("line").style("display", "none")
      .selectAll("path").style("display", "none");

    // Style x-axis text
    svg.selectAll(".tick text")
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px")
      .attr("fill", cssVars.footerText);

    // Create y-axis with custom ticks
    svg.append("g")
      .call(d3.axisLeft(y)
        .tickValues([0, 1000, 2000, 3000])
        .tickFormat(d => {
          if (d === 0) return "0";
          if (d === 1000) return "1k";
          if (d === 2000) return "2K";
          if (d === 3000) return "3K";
          return "";
        }))
      .selectAll("line").style("display", "none");

    // Style y-axis text
    svg.selectAll(".tick text")
      .attr("font-family", "sans-serif")
      .attr("font-size", "14px")
      .attr("fill", cssVars.footerText);

    // Remove y-axis line
    svg.selectAll(".domain").style("display", "none");

    // Create line generator with curve
    const line = d3.line()
      .x(d => x(d.month) + x.bandwidth() / 2)
      .y(d => y(d.value))
      .curve(d3.curveBasis);

    // Create area generator
    const area = d3.area()
      .x(d => x(d.month) + x.bandwidth() / 2)
      .y0(height)
      .y1(d => y(d.value))
      .curve(d3.curveBasis);

    // Add the area
    svg.append("path")
      .datum(data)
      .attr("fill", "rgba(40, 162, 99, 0.2)")
      .attr("d", area);

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", cssVars.backgroundColor)
      .attr("stroke-width", 2)
      .attr("d", line);

  }, []);

  return (
    <div className="flex justify-center items-center w-full font-sans">
      <div className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg">
        <div className="w-full h-64 relative">
          <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
      </div>
    </div>
  );
};

export default ChartPreview;