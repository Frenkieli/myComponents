function AEA(elementBox, elementArray) {
  elementArray.forEach(v => {
    elementBox.appendChild(v);
  })
  return elementBox;
}
function AE(elementBox, element) {
  elementBox.appendChild(element);
  return elementBox;
}
function CE(elementType, elementClassName, elementId) {
  let element = document.createElement(elementType);
  if (elementClassName) element.className = elementClassName;
  if (elementId) element.id = elementId;
  return element;
}

function $id(elementName) {
  return document.getElementById(elementName)
}
function $qs(elementName) {
  return document.querySelector(elementName)
}