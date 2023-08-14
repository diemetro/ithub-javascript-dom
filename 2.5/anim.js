document.addEventListener("DOMContentLoaded", function() {
    const chartContainer = document.getElementById("chart-container");
  
    let data = [];
    let points = [];
  
    const addDataPoint = (x, y) => {
      data.push({ x, y });
      updateChart();
    };
  
    const updateChart = () => {
      const lineGenerator = d3.line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveCardinal);
  
      points = chartContainer.selectAll(".point")
        .data(data);
  
      points.enter()
        .append("circle")
        .attr("class", "point")
        .attr("r", 0)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .transition()
        .duration(500)
        .attr("r", 5);
  
      points.transition()
        .duration(500)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
  
      const path = chartContainer.selectAll(".line")
        .data([data]);
  
      path.enter()
        .append("path")
        .attr("class", "line")
        .attr("d", lineGenerator)
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .attr("stroke-dasharray", function() {
          const length = this.getTotalLength();
          return `${length} ${length}`;
        })
        .attr("stroke-dashoffset", function() {
          const length = this.getTotalLength();
          return length;
        })
        .transition()
        .duration(500)
        .attr("stroke-dashoffset", 0);
    };
  
    // Пример добавления точек с интервалом
    let x = 50;
    const interval = setInterval(() => {
      const y = Math.random() * 250 + 25;
      addDataPoint(x, y);
      x += 50;
      if (x > 450) clearInterval(interval);
    }, 1000);
  });
  