目前有三種寫法

１.拿到圖片切出自己要的那一部分進行使用(可以300*200這樣){這個最好，要改寫出可以選位置的功能}

２.等比例縮放圖片尺寸(單純將寬或是高其中一個壓縮到自己要的大小)

３.破壞圖片比例後重畫到畫面上(直接破圖，簡單快速)

參考網站

HTML5 Canvas處理頭像上傳(方法一)
https://www.itread01.com/content/1545569854.html

前端如何使用 JS 先壓縮圖片尺寸大小再進行上傳，有效節省儲存空間﹍實作範例(方法二)
https://www.wfublog.com/2019/06/js-compress-resize-image-canvas.html

深入研究HTML5 canvas實現圖片壓縮上傳(方法三)
https://www.itread01.com/p/656132.html

壓縮後確認檔案大小的方法

            // 破壞圖片比例後重畫到畫面上
            canvas.width = 600;
            canvas.height = 400;
            context.drawImage(img, 0, 0, 600, 400);
            // // 下方是壓縮後輸出
            let pre;
            // 確認要壓縮多少
            if(canvas.toDataURL('image/jpeg', 0.8.length) <(131072-1024)){
              pre = 0.8;
            }else if(canvas.toDataURL('image/jpeg', 0.6).length <(131072-1024)){
              pre = 0.6;
            }else if(canvas.toDataURL('image/jpeg', 0.5).length <(131072-1024)){
              pre = 0.5;
            }else if(canvas.toDataURL('image/jpeg', 0.3).length <(131072-1024)){
              pre = 0.3;
            }else{
              pre = 0.1;
            }
            $.src = canvas.toDataURL('image/jpeg', pre);
            // 壓縮完成後輸出

 主要是使用字串查度做檢查