class doughnutChart{
  constructor(){
    this.color = ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#9966FF', '#C9CBCF'];
  }
  chart(element, data){
    let total = 0;
    data.forEach(value => {
      total += value.value;
    });
    // document.addEventListener
    let svg =  d3.select(element).
                  attr('width', '300').
                  attr('height', '300');

    let circle =svg.append('circle').
                    attr('cx', 50).
                    attr('cy', 50).
                    attr('r' , 30).
                    attr('fill' , '#f90').
                    attr('stroke' , '#c00').
                    attr('stroke-width' , '5px').
                    attr('id' , 'asdasd');
    circle.on('click', function(){
      console.log('飛吧');
    })
    console.log(circle);
    // circle.addEventListener('click',function(e){
    //   console.log('我點到圈圈了')
    // })
    
    console.log(element, data, total)
  }
}