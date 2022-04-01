import React, { useEffect, useRef } from "react";
import * as d3 from "d3";  
import colors from "constans/colors";
const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

const drawChart = (element, data) => {
    const chartColors = [colors.lightGreen, colors.red];
    const boxSize = 500;
  
    d3.select(element).select("svg").remove(); 
    const svg = d3
      .select(element)
      .append("svg")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
      .append("g")
      .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);
  
    const arcGenerator = 
        d3
        .arc()
        .cornerRadius(5)
        .padAngle(0.05)
        .innerRadius(110)
        .outerRadius(220);
  
    const pieGenerator = d3.pie().value((d) => d.value);
  
    const arcs = svg.selectAll().data(pieGenerator(data)).enter();
    arcs
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (d, i) => chartColors[i % data.length])
      .style("opacity", "0.7")
      .on("mouseover", function(d) {
        d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", "1")
      }) 
      .on("mouseout", function(d) {
        d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", "0.7")
      })
      .style("cursor", "pointer")        
      .transition()
      .duration(700)
      .attrTween("d", function (d) {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arcGenerator(d);
        };
      });

    arcs
    .append("text")
    .attr("text-anchor", "middle")
    .text(d => `${d.data.value}%`)
    .style("fill", colors.black)
    .attr("transform", d => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
    })
    .style("font-size", "0")
    .transition()
    .duration(700)
    .style("font-size", "38px")
  };

  return (
    <div className="container">
      <div className="graph" ref={ref} />
    </div>
  );
};

export default React.memo(DonutChart);