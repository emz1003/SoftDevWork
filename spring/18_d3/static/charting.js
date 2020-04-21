
d3.select("#render").on("click", function () {
    // Clear SVG Canvas
    // console.log("rendering");
    graphSVGElement = d3.select("#chart")
    color = "orange"
    labelElement = d3.select("#chartLabel")
    graphSVGElement.selectAll("*").remove();

    height = 800
    width = 1250

    data.shift()

    // Parse out data from query input
    xAxisData = data.map(d => 1000 * parseFloat(d[0]));
    yAxisData = data.map(d => parseFloat(d[1]));

    console.log(data);


    // Create D3 Scale for Y Axis
    yScale = d3.scaleLinear()
        .domain([d3.min(yAxisData), d3.max(yAxisData) + 5])
        .range([0, height]);

    // Create D3 Scale for Y Axis Label
    yAxisScale = d3.scaleLinear()
        .domain([d3.min(yAxisData), d3.max(yAxisData) + 5])
        .range([0, -height]);

    // Set Up Y-Axis Label
    const yAxis = d3.axisLeft()
        .scale(yAxisScale);

    // Attach Y-Axis Label to Chart
    graphSVGElement.append("g").attr("transform", "translate(100, 800)").style("color", "black").call(yAxis);

    // A Temporal Line Graph uses a Time-Based X-Axis
    xScale = d3.scaleTime()
        .domain(d3.extent(xAxisData))
        .range([100, width])

    // Set up SVG element for graph
    graphSVGElement
        .attr("height", height)
        .attr("width", xScale.range()[1] + 25)
        .attr("font-family", "sans-serif")
        .attr("font-size", "10")
        .attr("text-anchor", "end");

    // Add X-Axis Label
    graphSVGElement.append("g")
        .attr("transform", "translate(0," + (height - 25) + ")")
        .style("color", "black")
        .call(d3.axisBottom(xScale));

    // Add line for line graph
    graphSVGElement.append("path")
        .datum(data)
        .attr("class", "LINE")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(function (d) { return xScale(parseInt(d[0] * 1000)) })
            .y(function (d) { return yScale(parseInt(d[1])) }))
        .attr("transform", "translate(0, 775),scale(1, -1)")

    movingAverage = []
    for (var i = 0; i < yAxisData.length; i++) {
        if (i < 5) {
            movingAverage[i] = 0
        } else {
            var sum = 0
            for (var c = 0; c < 5; c++) {
                sum += yAxisData[i - c]
            }
            movingAverage[i] = sum / 5.0;
        }
    }

    d3.select("#transition").on("click", function () {
        // console.log("bruh");

        d3.select(".LINE")
            .datum(data)
            .transition()
            .attr("d", d3.line()
                .x(function (d) { return xScale(parseInt(d[0] * 1000)) })
                .y(function (d, i) { return yScale(movingAverage[i]) })
            )
            .attr("transform", "translate(0, 775),scale(1, -1)")
    })
})



