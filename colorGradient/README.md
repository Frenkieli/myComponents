這個是可以自動吐出隨機漸層色的js

將這個網站的建層色隨機吐出

https://webgradients.com/

然後將資料順序排好做使用


使用方式
let get = randomColor.get(185);
let getType = randomColor.getType(1, 66);
let getLike = randomColor.getLike(55);
console.log(get);
console.log(getType);
console.log(getLike);

getTyp說明

0 F9AFAD  裸色　Beige　(膚色)

1 FC96D3 粉紅

2 8B56E9　粉紫

3 259BE5  藍

4 7BCC9B  綠

5 E5E9EC 淡灰

6 000000 76







這是資料結構
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