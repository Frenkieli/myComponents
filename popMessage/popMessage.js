var popMessage = (function () {
    // cus追加的背景顏色與文字顏色記得寫在這邊
    let colorData = {
        color: ['#eee', '#eee'],
        backColor: ['#1CAF64', '#AF1C1C'],
        imgSrc: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsSAAALEgHS3X78AAABeklEQVRIx62Vz1XCQBCHv00D0oF4ypF0YEqgA0MFYgd0YKxAqECswFCB8bi32AFUMF4mvH3Dbgh5zgk2O9/Ov/2tExGuWY6bAYVZbj1yHPJzKbgCl8AaWCT8f4DaI9vR8By3BGrgnnH2Cyw90oaLWQS8Bj5uAKN7v3NclYxcP74PRNfp7/nA4au+TGd4jiuBr8jmT2BjU9b9G+DR7D8BhUe6EN5GGrdKNcuU8dUsHzxSOhFJRf3ikXpMwXNcDTyb5Ye+oVXk5HpsNz2y1p6EVvXw0nzYcrvZYMosGKXQ9hPgrflf9DUXk6abAL/gZPyT5TirPWf4KTLDt5qFH3p4Yzs9AW59uizRwKdYmgMlKSM3dd83dKa6cWe0pLim2RpEY309Ms90Oo6qE1bpOpXfoatvwegbcKGKTSS9PottoIqFPiQxZdx5pIrBZxrJYuJEnsEXc67lKYHdBPBbCL72hqb02tpB9b4Z/UAHh8y1vvPgojRa/8YjXcr3D3Xdl5/t7pLiAAAAAElFTkSuQmCC',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8klEQVQ4y7XV2w2CMBiG4beNA5DAvW4gG8gIuEGdTJzAFXQD3IMLN/i8UAwK9OCBhISU9knL//3BSOLX1wIAUzjADcYb1DVRwsTaxeNhBWwGLzaYgiB8B/dvoyfrWbJ/LEoBAbCBw03DHhC4IgmRZyJvRa6Z20nq5zrPvEYS5ll9U2TACVjP7GD33P30dUCdAwZoHEwIHH9TdVegAi6fgtOFSoNH4Pj4rxXOgBZYzoBn1FWpkao9YN8gLh715zCYY/sFOAvbBPDgKd4rnNIpsZ13r74pauAYFZtwg2z745fROQznuLSpwY6BbTIYAZt//KNuI/K4mHCaOJIAAAAASUVORK5CYII='],
    },
        status;

    /**
     * @description import style
     */
    let _init = function(){
        let body = document.getElementsByTagName("body")[0];
        let style = document.createElement('style');
        // style.innerHTML = '';
        // '.popMessage{ position : fixed; right : 25px ; bottom : 25px ; max-width: 30%; } .popMessage div,.popMessage img{ padding: 0; margin: 0; -webkit-box-sizing: border-box; box-sizing: border-box; font-family: sans-serif , monospace; } .popMessage .popMessage_card{ overflow: hidden; position : relative; border: 1px solid rgba(0,0,0,0.8); margin : 10px; font-size : 22px; border-radius : 15px; -webkit-transition: 0.2s; -o-transition: 0.2s; transition: 0.2s; cursor: pointer; -webkit-animation:popMessageAnimation 0.2s ; animation:popMessageAnimation 0.2s ; } @-webkit-keyframes popMessageAnimation { 0%{ -webkit-transform: translateX(100%); transform: translateX(100%); } 100%{ -webkit-transform: translateX(0%); transform: translateX(0%); } } @keyframes popMessageAnimation { 0%{ -webkit-transform: translateX(100%); transform: translateX(100%); } 100%{ -webkit-transform: translateX(0%); transform: translateX(0%); } } .popMessage .popMessage_card:hover{ -webkit-transform: translateX(-15px); -ms-transform: translateX(-15px); transform: translateX(-15px); } .popMessage .popMessage_card_header{ padding: 5px 15px; border-bottom: 1px dotted rgba(0,0,0,0.8); background-color: rgba(255,255,255,0.15); } .popMessage .popMessage_card_header::after{ content: ""; display: block; clear: both; } .popMessage_card_header .popMessage_card_title{ float: left; } .popMessage_card_header .popMessage_card_img{ float: right; } .popMessage_card_header .popMessage_card_img img{ vertical-align: middle; } .popMessage .popMessage_card_body{ padding: 10px 15px; font-size: 16px; } @media (max-width: 767px){ .popMessage{ right : 0px; left: 0; bottom : 0px; max-width: 95%; margin: auto }; .popMessage .popMessage_card{ font-size : 16px; padding : 10px; border-radius : 10px; } .popMessage .popMessage_card:hover{ -webkit-transform: translateY(-5px); -ms-transform: translateY(-5px); transform: translateY(-5px); } .popMessage .popMessage_card_body{ font-size: 14px; } }';
        colorData.color.forEach((v,i)=>{
            style.innerHTML +=
            '.popMessage_card.status' + i + '{' +
            'color: ' + v + ';' +
            'background-color: ' + colorData.backColor[i] + ';' +
            '}'
            ;
        })
        body.appendChild(style);
    }


    /**
     * @description 輸入資料用
     * @param {Object} data - .color .backColor [.imgSrc]
     */
    let _data = function (data) {
        /**
         * @description 單純作push迴圈
         * @author frenkie
         * @date 2020-04-22
         * @param {Array<String>} arr - this.data
         * @param {Array<String>} inArr - input data
         */
        function pushArray(arr, inArr){
            inArr.forEach(v=>{
                arr.push(v);
            })
        }
        pushArray(colorData.color, data.color);
        pushArray(colorData.backColor, data.backColor);
        if(data.imgSrc){
            pushArray(colorData.imgSrc, data.imgSrc);
        }
    }

    let _ok = function (strobj, time = 2000 , callback = function (){}) {
        status = 0;
        _main(strobj, time , callback);
    }

    let _no = function (strobj, time = 2000 , callback = function (){}) {
        status = 1;
        _main(strobj, time , callback);
    }

    let _cus = function (strobj, i, time = 2000 , callback = function (){}) {
        status = i + 2;
        _main(strobj, time , callback);
    }

    /**
     * @description build popmessage card
     * @author frenkie
     * @date 2020-04-21
     * @param {Element} element - parentNode
     * @param {Number} status - ok:0 err:1 cus:2-∞
     * @returns {Object<Element>} - need content element and card itself
     */

    function popMessageCardBuild(element, status){
        let returnData = {};
        let card = document.createElement('div');
        card.className = 'popMessage_card status' + status;
        let card_header = document.createElement('div');
        card_header.className = 'popMessage_card_header';
        let card_header_title = document.createElement('div');
        card_header_title.className =  'popMessage_card_title popMessage_card_header_item';
        let card_body = document.createElement('div');
        card_body.className = 'popMessage_card_body';
        element.appendChild(card);
        card.appendChild(card_header);
        card.appendChild(card_body);
        card_header.appendChild(card_header_title);
        if(colorData.imgSrc[status]){
            let card_header_img = document.createElement('div');
            card_header_img.className = 'popMessage_card_img popMessage_card_header_item';
            let card_header_img_img = document.createElement('img');
            card_header_img_img.src = colorData.imgSrc[status];
            card_header.appendChild(card_header_img);
            card_header_img.appendChild(card_header_img_img);
            returnData.img = card_header_img_img;
        }
        returnData.card = card;
        returnData.title = card_header_title;
        returnData.content = card_body;
        return returnData;
    }

    let _main = function (strobj, time = 2000, callback) {
        // console.log(colorData,'顏色');
        var pop;
        if (document.getElementById("popMessage_module")) {
            pop = document.getElementById("popMessage_module");
        } else {
            pop = document.createElement("div");
            pop.id = "popMessage_module";
            setTimeout(() => {
                document.getElementsByTagName("body")[0].appendChild(pop);
            }, 1);
        }
        pop.className = 'popMessage';
        let popContent = popMessageCardBuild(pop, status);
        popContent.title.innerText = strobj.title;
        popContent.content.innerText = strobj.content;
        popContent.card.addEventListener('click', callFunction);
        let timeClock;
        let count2 = 100;
        let timeClock2;
        function callFunction(e){
            clearTimeout(timeClock);
            clearInterval(timeClock2);
            popContent.card.remove();
            callback();
        }
        timeClock = setTimeout(() => {
            timeClock2 = setInterval(() => {
                count2 -= 10;
                popContent.card.style.opacity = count2 / 100;
                if (count2 <= 0) {
                    callFunction();
                }
            }, 50);
        }, time);
        // 放進去
    }

    return {
        init: _init,
        data: _data,
        ok: _ok,
        err: _no,
        cus: _cus,
    };
}());