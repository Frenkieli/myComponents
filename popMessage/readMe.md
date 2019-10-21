彈窗提示功能

呼叫方式

popMessage('這個是要談出的文字','這個是狀況')

套件引入方式

引入popMessage.js

呼叫方式

popMessage.ok(要顯示的文字)

popMessage.err(要顯示的文字)


客製化
popMessage.cus(要顯示的文字,客製化幾號)

popMessage.cus('Hi all!',0)

記得把參數放進去不能會錯誤

popMessage.data({
    color:[顏色參數一,顏色參數二],
    backColor:[顏色參數一,顏色參數二]
})