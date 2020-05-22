function AEA(elementBox: HTMLElement, elementArray: HTMLElement[]): HTMLElement {
  elementArray.forEach(function (v) {
    elementBox.appendChild(v);
  })
  return elementBox;
}
function AE(elementBox: HTMLElement, element: HTMLElement): HTMLElement {
  elementBox.appendChild(element);
  return elementBox;
}
function CE(elementType: string, elementClassName?: string | null, elementId?: string | null): HTMLElement {
  var element = document.createElement(elementType);
  if (elementClassName) element.className = elementClassName;
  if (elementId) element.id = elementId;
  return element;
}

function $id(elementName: string): HTMLElement {
  let element = document.getElementById(elementName);
  if (element === null) {
    throw new Error('not find a dom');
  }
  return element;
}
function $cs(elementName: string): HTMLCollectionOf<Element> {
  let element = document.getElementsByClassName(elementName);
  return element;
}
function $qs(elementName: string): Element {
  let element = document.querySelector(elementName);
  if (element === null) {
    throw new Error('not find a dom');
  }
  return element;
}

export {
  AEA,
  AE,
  CE,
  $id,
  $cs,
  $qs,
}