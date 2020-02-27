class doughnutChart{
  constructor(){
    this.element;
    this.data;
    this.svg;
    this.width;
    this.height;
    this.minSide;
    this.radius;
    this.radiusin;
    this.color;
    this.pie;
    this.arc;
    this.bigArc;
    this.arcs;
    this.minvalue;
    this.maxvalue;
  }
  init(element, data){
    let $this       = this;
    $this.data      = data;
    $this.element   = element;
    $this.width     = $this.element.getBoundingClientRect().width;
    $this.height    = $this.element.getBoundingClientRect().height;
    $this.minSide   = Math.min($this.width, $this.height);
    $this.svg       = d3.select($this.element)
                      .attr("viewBox", [0, 0, $this.width, $this.height]);
    $this.radius    = $this.minSide / 2;
    $this.radiusin  = $this.minSide / 4;
    $this.color     = d3.scaleOrdinal()
                        .domain(data.map(d => d.name))
                        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
    $this.pie       = d3.pie()
                        .sort(null)
                        .value(d => d.value);
    $this.arc       = d3.arc()
                        .innerRadius($this.minSide / 6)
                        .outerRadius($this.minSide / 2.2);
    $this.bigArc    = d3.arc()
                        .innerRadius($this.minSide / 8)
                        .outerRadius($this.minSide / 2);
    $this.arcs      = $this.pie(data);
    $this.minvalue   = $this.data[0].value;
    $this.maxvalue   = $this.data[0].value;
    $this.data.forEach(v=>{
      if(v.value > $this.maxvalue){
        $this.maxvalue = v.value;
      }
      if(v.value < $this.minvalue){
        $this.minvalue = v.value;
      }
    })
  }
  doughnut(){
    let $this       = this;
    let svg         = $this.svg;
    let total = 0;
    $this.data.forEach(v => {
      total += v.value;
    })
    svg.append("g")
      .attr('transform' , 'translate('+ ($this.width / 2)+','+ ($this.height / 2) +')')
      .attr("stroke", "white")
      .selectAll("path")
      .data($this.arcs)
      .join("path")
      .on('click', function (d) {
        console.log(d.data)
      })
      .on('mouseenter', function () {
        d3.select(this).transition().duration(200).attr("d", $this.bigArc);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(200).attr("d", $this.arc);
      })
      .attr("fill", d => $this.color(d.data.name))
      .attr("d", $this.arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    svg.append("g")
      .attr('transform' , 'translate('+ ($this.width / 2)+','+ ($this.height / 2) +')')
      .attr("font-family", "sans-serif")
      .attr("font-size", 20)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data($this.arcs)
      .join("text")
      .attr("transform", function (d) {
        var c = $this.arc.centroid(d);
        return "translate(" + c[0] * 1.2 + "," + c[1] * 1.2 + ")";
      })
      .call(text => text.append("tspan")
      .attr("y", "-0.4em")
      .attr("font-weight", "bold")
      .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
      .attr("x", 0)
      .attr("y", "0.7em")
      .attr("fill-opacity", 0.7)
      .text(d => d.data.value.toLocaleString()));

    let text = svg.append('g')
                  .attr('transform' , 'translate('+ ($this.width / 2)+','+ ($this.height / 2) +')')
                  .attr('id', 'center')
                  .append('text')
                  .attr("x" , '0')
                  .attr("font-family", "sans-serif")
                  .attr("font-size", 28)
                  .attr("font-weight", "bold")
                  .attr("fill", "#111")
                  .attr("text-anchor", "middle")
                  .attr("vertical-align", "bottom")
    text.append('tspan')
      .attr("x",text.attr("x")) 
      .attr("dy","0em") 
      .text('總數');
    text.append('tspan')
      .attr("x",text.attr("x")) 
      .attr("dy","1em") 
      .text(total);
  }

  bar(){
    let $this   = this;
    let svg = $this.svg; 
    var scaleX = d3.scaleLinear()
      .range([0, $this.width])
      .domain([0, 9]);

    var scaleY = d3.scaleLinear()
      .range([$this.height, 0])
      .domain([1, $this.data.length + 1]);

    // var axisX = d3.svg.axis()
    //   .scale(scaleX)
    //   .ticks(10)
    //   .orient('bottom')
    //   .tickFormat(d => d + 'n');
    let interpolate = d3.interpolate($this.minvalue, $this.maxvalue)
    console.log(interpolate(0))
    var axisX = d3.axisBottom(scaleX)
      .tickFormat(d => interpolate(d))
      .tickPadding(-2);

    var axisXGrid = d3.axisBottom(scaleX)
      .ticks(10)
      .tickFormat('')
      .tickSize(-$this.height, 0);

    var axisY = d3.axisRight(scaleY)
      .ticks($this.data.length)
      .tickFormat(d => d + "月");

    var axisYGrid = d3.axisRight(scaleY)
      .ticks($this.data.length)
      .tickFormat('')
      .tickSize($this.width, 0)




    svg.append('g')
      .call(axisX)
      .attr('fill' , 'none')
      .attr('stroke' , '#000')
      .attr('transform' , 'translate(0,' + ($this.height - 10 - $this.height * 0.004573933344450533) +')');

    svg.append('g')
      .call(axisY)    
      .attr('fill' , 'none')
      .attr('stroke' , '#000')
      .attr('transform' , 'translate(0, -40)');


    svg.append('g')
      .call(axisXGrid)
      .attr('fill' , 'none')
      .attr('stroke' , 'rgba(0,0,0,.1)')
      .attr('transform' , 'translate(0,' + ($this.height - 10 - $this.height * 0.004573933344450533) + ')');
    svg.append('g')
      .call(axisYGrid)
      .attr('fill' , 'none')
      .attr('stroke' , 'rgba(0,0,0,.1)')
      .attr('transform' , 'translate(0, ' +  ($this.height * -0.004573933344450533 - 10) + ')');
    console.log($this.data)

    svg.append('g')
        .selectAll('rect')
        .data($this.data)
        .enter()
        .append('rect')
        .attr('x', scaleY)
  }
  // chart(element, data){
  //   let total = 0;
  //   data.forEach(value => {
  //     total += value.value;
  //   });
  //   // document.addEventListener
  //   let svg =  d3.select(element).
  //                 attr('width', '300').
  //                 attr('height', '300');

  //   let circle =svg.append('circle').
  //                   attr('cx', 50).
  //                   attr('cy', 50).
  //                   attr('r' , 30).
  //                   attr('fill' , '#f90').
  //                   attr('stroke' , '#c00').
  //                   attr('stroke-width' , '5px').
  //                   attr('id' , 'asdasd');
  //   circle.on('click', function(){
  //     console.log('飛吧');
  //   })
  //   console.log(circle);
  //   // circle.addEventListener('click',function(e){
  //   //   console.log('我點到圈圈了')
  //   // })
    
  //   console.log(element, data, total)
  // }
}