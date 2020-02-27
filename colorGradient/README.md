這個是可以自動吐出隨機漸層色的js

將這個網站的建層色隨機吐出

https://webgradients.com/

然後將資料順序排好做使用

"name": "Winter Neva",  // gradient name
"favorite": false,  // default value
"index": 1,  // gradient index in array ( check last index in json file )
"deg": 120,  // gradient degree ( top - zero degree )
"group": [ "#259BE5" ],  // check color groups, may contains more than one value
"gradient": [  // color array, may contains more than one object
    {
        "color": "#a1c4fd",  // HEX
        "pos": 0 // color position in gradient
    },
    {
        "color": "#c2e9fb",
        "pos": 100
    }
]