var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) {
    	return d;
    })
    .style('color', function(d){
    	if(d > 15) {
    		return 'red';
    	}
    	else {
    		return 'blue';
    	}
    });

var w = 500;
var h  = 50;
var svg = d3.select('body')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

var circles = svg.selectAll('circle')
				 .data(dataset)
				 .enter()
				 .append('circle');

circles.attr('cx', function(d, i){
				return (i * 50) + 25;
			})
			.attr('cy', h/2)
			.attr('r', function(d){
				return d;
			});
