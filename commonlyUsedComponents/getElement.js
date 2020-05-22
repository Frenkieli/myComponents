"use strict";
exports.__esModule = true;
function AEA(elementBox, elementArray) {
    elementArray.forEach(function (v) {
        elementBox.appendChild(v);
    });
    return elementBox;
}
exports.AEA = AEA;
function AE(elementBox, element) {
    elementBox.appendChild(element);
    return elementBox;
}
exports.AE = AE;
function CE(elementType, elementClassName, elementId) {
    var element = document.createElement(elementType);
    if (elementClassName)
        element.className = elementClassName;
    if (elementId)
        element.id = elementId;
    return element;
}
exports.CE = CE;
function $id(elementName) {
    var element = document.getElementById(elementName);
    if (element === null) {
        throw new Error('not find a dom');
    }
    return element;
}
exports.$id = $id;
function $cs(elementName) {
    var element = document.getElementsByClassName(elementName);
    return element;
}
exports.$cs = $cs;
function $qs(elementName) {
    var element = document.querySelector(elementName);
    if (element === null) {
        throw new Error('not find a dom');
    }
    return element;
}
exports.$qs = $qs;
