var DonutChartComponent = Ember.Component.extend({
    tagName: 'svg',
    attributeBindings: 'width height'.w(),
      
    draw: function(){
      var formatPercent = d3.format(".0%");
      var width = this.get('width');
      var height = this.get('height');
      var innerRad = this.get('innerRad');
      var outerRad = this.get('outerRad');
      var data = this.get('data');
      var svg = d3.select('#'+this.get('elementId')).append('svg');
      var cScale = d3.scale.linear().domain([0,100]).range([0,2*Math.PI]);
  	  var arc = d3.svg.arc()
  	  			.innerRadius(innerRad)
  	  			.outerRadius(outerRad)
  	  			.startAngle(function(d) {return cScale(d[0]);})
  	  			.endAngle(function(d) {return cScale(d[1]);});
  	  
      svg.attr('width', width)
         .attr('height', height)
        .append('g')
         .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

      var g = svg.selectAll('path')
          .data(data)
          .enter().append('g');

      g.append('path')
        .attr('d', arc)
        .style("fill", function(d) {return d[2];})
        .attr('transform', 'translate(150,75)');
        
      g.on('mouseover', function(d) {
          text = g.append('text')
              .attr('transform', 'translate(' + ((width / 2) - 34) + ',' + ((height / 2) - 8) +')')
              .attr('dy',".35em")
              .style('text-anchor', 'left')
              .text(function(d) {return d[3];});
          value = g.append('text')
              .attr('transform', 'translate(' + ((width / 2) - 34) + ',' + ((height / 2) + 10) +')')
              .attr('dy',".35em")
              .style('text-anchor', 'left')
              .text(function(d) {return d[4];});
        })
        .on('mouseleave', function(d) {
          text.remove();
          value.remove();
        });

      // g.append('text')
      //   .attr('transform', 'translate(' + ((width / 2) - 34) + ',' + ((height / 2) - 15) +')')
      //   .attr('dy',".35em")
      //   .style('text-anchor', 'left')
      //   .text(function(d) {return d[3];});
        // .text(function(d) {return d[4];});

     // var width = this.get('width'),
     //      height = this.get('height'),
     //      data = this.get('data'),
     //      radius = Math.min(width, height) / 2;

     //  var arc = d3.svg.arc()
     //      .outerRadius(this.get('outerRad'))
     //      .innerRadius(this.get('innerRad'));

     //  var svg = d3.select('#'+this.get('elementId')).append('svg')
     //      .attr('width', width)
     //      .attr('height', height)
     //    .append('g')
     //      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

     //  var g = svg.selectAll('.arc')
     //      .data(data)
     //    .enter().append('g')
     //      .attr('class', 'arc');

     //  g.append('path')
     //      .attr('d', arc)
     //      .style("fill", function(d) {return d[2];});

     //  g.append('text')
     //      .attr('transform', function(d) {return "translate(" + arc.centroid(d) + ')'; })
     //      .attr('dy',".35em")
     //      .style('text-anchor', 'middle')
     //      .text(function(d) {return d[3];});
    },
  
    didInsertElement: function(){
      this.draw();
    }
  });

module.exports = DonutChartComponent;

