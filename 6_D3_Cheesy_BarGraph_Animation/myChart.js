//Import Json
// d3.json("data/forecast.json", d => {
// 	const temps = [],
// 		height = 400,
// 		width = 600,
// 		barW = 50,
// 		barOffset = 5;
	
// 	const tempColor, xScale, yScale, colors, tooltip, myChart;


// 	for (let i = 0; i<d.list.length; i++) {
// 		temps.push(d.list[i].main.temp);
// 	}
	
// }).then(console.log(temps))

// Margin setUp
const margin = {top:50, bottom: 20, left: 20, right:20};
// Array: bar Data
const barData = [];//const barData = [20, 30, 45, 10, 100, 85, 90, 100, 37];
//Generate barData items
for (let i = 0; i < 50; i ++) {
	let myNum = Math.floor(Math.random() * 50);
	barData.push(myNum);
}

const h = 400, w = 800, barW = 10, barOffset = 5;
let tempColor; // cannot be const and not set

const yScale = d3.scaleLinear()
	.domain([0, d3.max(barData)])
	.range([margin.bottom, h-margin.top]); // Up to 90% * of the height

const xScale = d3.scaleBand()
	.domain(barData)
	.range([margin.left, w - margin.right]) 
	.paddingInner(0.3)
	.paddingOuter(0.1)

// Color Reference: https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/1D9A6C/29/154/108/white
const colors = d3.scaleLinear()
	.domain([0, barData.length*0.33, barData.length*0.67, barData.length])
	.range(["#DEEDCF", "#56B870", "#188977", "#0A2F51"]);
	// .domain([0, d3.max(barData)])
	// .range(["#ccc", "#000"])


// Add a ToolTip to DOM
const tooltip = 
	d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("padding", "0 10px")
	.style("background", "#FFD300") //yellow
	.style("opacity", 0)
	.style("font-size", "15px")

// (1) Chart Basic - svg - Rect Preparation
let myChart  = 
	d3.select("#viz1")
	.append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background", "#FFF")
	.style("border", "1px solid #000")
	.selectAll("rect")
	.data(barData) // We'll create a series of rects
	.enter()
	.append("rect")
	.attr("fill", d => {
		return colors(d);
	})
	.attr("width", barW)
	.attr("height", 0)
	.attr("x", w/2) // starting position
	.attr("y", h - margin.bottom) // Beginning pos  //h - margin.bottom

// (4) Modification (Animation Into->)
myChart.transition()
.attr("x", (d) => {
	return xScale(d); //Using scaleband 	//	return (barW + barOffset) * i;
})
	.attr("height", d => {
		return yScale(d);
	})
	.attr("y", d => {
		return (h - margin.bottom) - yScale(d); // From the bottom
	})
	.delay((d, i) => {
		return i * 20;
	})
	.duration(500) // How long does an animation happen
	

// (5) Mouse EVENT
myChart
	.on('mouseover', function(d) { // ***Arrow function doesnt work with this
		tooltip.transition().duration(200)
		.style("opacity", 0.9);

		tooltip.html(d)
		.style("left", (d3.event.pageX - 35) + 'px')	
		.style("top", (h) + 'px');		

		tempColor = this.style.fill; // Save the color
		d3.select(this)
		.style("opacity", 0.5)
		.style("fill", "#00FFFF")
	})
	.on('mouseout', function(d) { 
		tooltip.transition().duration(200)
		.style("opacity", 0);

		d3.select(this)
		// .transition()
        // .duration(100)
		.style("opacity",1)
		.style("fill", tempColor)
	});
