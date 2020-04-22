/**
 * @description
 * @author frenkie
 * @date 2020-04-21
 * @param {*} aaa
 */
function Demo(aaa){
  this.data = {
    aaa: aaa
  }
}

/**
 * @description
 * @param {*} aaa
 */
Demo.prototype.init = function (aaa){
  console.log(this.data.aaa);
}
Demo.prototype.test = function (aaa){
  console.log('測試喔');
}
let demo = new Demo('您好');
demo.init();
demo.test();
// Demo.test(); // 這樣會跳錯