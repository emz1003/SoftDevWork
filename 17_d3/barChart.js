

console.log("bruh");

//Init your data:
var data = [4, 8, 15, 16, 23, 42];

//Select your chart.
var chart = d3.select(".chart");

//Prepare for data join.
var bar = chart.selectAll("div");

// (this defines selection to which you will join data)

//Join your data.
var barUpdate = bar.data(data);

//Instantiate new elements by appending to the “enter selection.”
var barEnter = barUpdate.enter().append("div");

//Set width of each bar proportional to its data value.
barEnter.style("width", function(d) {
return d * 10 + "px"; });

//Label each bar.
barEnter.text(function(d) { return d; });