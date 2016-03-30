svg = d3.select("svg");
g = svg.append("g");
g.attr("transform", "translate(100,50)");

x = d3.scale.linear()
    .domain([1999, 2013])  // Fill in the domain values for the x axis
    .range([0, 800]);
y = d3.scale.linear()
    .domain([0, 80])  // Fill in the domain values for the y axis
    .range([400, 0]);

x_axis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.format("d"));
y_axis = d3.svg.axis().scale(y).orient("left").ticks(4);

g.call(y_axis);

gx = g.append("g")
gx.call(x_axis);
gx.attr("transform", "translate(0,400)");

d3.csv("old_discoveries.csv", function(data) {
  g.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", function(d){return x(d.year)})
  .attr("cy", function(d){return y(d.important_discoveries)})
});

var button = d3.select("button");
button.on("click", function() {
  d3.csv("new_discoveries.csv", function(data) {
    g.selectAll("circle")
      .data(data)
      .style("fill", "red")
    .exit()
      .style("fill", "purple");
  });
});
// Okay, now all of your axes are set up.  Add code to draw points here.
//
// g.append("circle").attr("r", 8).attr("cx", x(2000)).attr("cy", y(45)); //Fill in the parens and add stuff after the last dot, then make more of these lines.
// g.append("circle").attr("r", 8).attr("cx", x(2001)).attr("cy", y(4)); //Fill in the parens and add stuff after the last dot, then make more of these lines.
// g.append("circle").attr("r", 8).attr("cx", x(2002)).attr("cy", y(2)); //Fill in the parens and add stuff after the last dot, then make more of these lines.
// g.append("circle").attr("r", 8).attr("cx", x(2003)).attr("cy", y(2)); //Fill in the parens and add stuff after the last dot, then make more of these lines.
//
// d3.selectAll("circle").attr("r", 8)
