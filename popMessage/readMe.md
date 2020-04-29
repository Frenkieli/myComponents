彈窗提示功能

呼叫方式

popMessage('這個是要談出的文字','這個是狀況')

套件引入方式

引入popMessage.css
引入popMessage.js

>可選 用來輸入自定義的圖片和顏色
```javascript
    popMessage.data({
        color:['#fa0','#0af'],
        backColor:['#0af','#fa0'],
        imgSrc:['叉叉.png', '圈圈.png']
    })
```
必要
```javascript
    popMessage.init();
```
將style輸入進網頁

呼叫方式



```javascript
    popMessage.cus(要顯示的物件[, 停留時間[, callback]]);

    popMessage.ok({title:'ok訊息',content:'可以喔'} , 5000);

    popMessage.err({title:'err訊息',content:'不行喔'} , 5000);

```

客製化
```javascript

    popMessage.cus(要顯示的物件, 客製化幾號[, 停留時間[, callback]);

    popMessage.cus({title:'cus1訊息',content:'客製化'},0 , 5000);

    popMessage.cus({title:'cus2訊息',content:'客製化'},1 , 5000);


```

支援結束時呼叫callback的函式


使用typescript重寫

在不使用exprot的情況下不會出錯

未來可能需要用webpack才能正常exprot