/**
 * @description 將陣列內重複的值砍掉
 * @author frenkie
 * @param {Array} array
 * @returns 
 */
function arrayUnique(array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
}

// 方變自己使用的function

/**
 * @description appendChild(array)
 * @author frenkie
 * @param {Element} elementBox - parentNode
 * @param {Array<Element>} elementArray - [element, element]
 * @returns 
 */
function AEA(elementBox,elementArray){
  elementArray.forEach(v=>{
    elementBox.appendChild(v);
  })
  return elementBox;
}
/**
 * @description appendChild(element)
 * @author frenkie
 * @param {Element} elementBox - parentNode
 * @param {Element} element - element
 * @returns 
 */
function AE(elementBox,element){
  elementBox.appendChild(element);
  return elementBox;
}
/**
 * @description createElement(type)
 * @author frenkie
 * @param {String} elementType - div,span...
 * @param {String} elementClassName - className
 * @param {String} elementId  - id
 * @returns 
 */
function CE(elementType,elementClassName,elementId){
  let element = document.createElement(elementType);
  if(elementClassName) element.className = elementClassName;
  if(elementId) element.id = elementId;
  return element;
}

/**
 * @description getElementById(name)
 * @author frenkie
 * @param {String} elementName - pick element by id
 * @returns 
 */
function $id(elementName) {
  return document.getElementById(elementName)
}
/**
 * @description querySelector(name)
 * @author frenkie
 * @param {String} elementName - pick element by css selector
 * @returns 
 */
function $qs(elementName) {
  return document.querySelector(elementName)
}