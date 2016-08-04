var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//declare width and height;
var w = 500;
var h = 100;
var barPadding = 1; 

//create SVG element
var svg = d3.select('body')
			.append('svg')
			.attr('width', w)
			.attr('height', h);

svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x', function(d, i){
		return i * (w/dataset.length);
	})
	.attr('y', 0)
	.attr('width', w/dataset.length- barPadding)
	.attr('height', 100);

/*d3.select("body").selectAll("p")
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
			})
			.attr('fill', 'yellow')
			.attr('stroke', 'orange')
			.attr('stroke-width', function(d){
				return d/2;
			});
*/
