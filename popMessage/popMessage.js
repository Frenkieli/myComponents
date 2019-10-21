var popMessage = (function () {
    // cus追加的背景顏色與文字顏色記得寫在這邊
    let colorData = {
        color: [],
        backColor: [],},
        status;


    let _data = function (arr){
        colorData.color = ['#eee','#eee' ,...arr.color];
        colorData.backColor = ['#1CAF64','#AF1C1C' ,...arr.backColor];
    }

    let _ok = function (str) {
        status = 0;
        _main(str);
    }

    let _no = function (str) {
        status = 1;
        _main(str);
    }

    let _cus = function (str, i) {
        status = i + 2 ;
        _main(str);
    }

    let _main = function (str) {
        console.log(colorData,'顏色');
        if (document.getElementById("popMessage_module")) {
            pop = document.getElementById("popMessage_module");
        } else {
            pop = document.createElement("div");
            let boxStyle = pop.style;
            pop.id = "popMessage_module";
            boxStyle.position = "fixed";
            boxStyle.right = "50px";
            boxStyle.bottom = "50px";
        }
        let popStr = document.createElement("div");
        let style = popStr.style;
        popStr.innerText = str;
        style.color = colorData.color[status];
        style.backgroundColor = colorData.backColor[status];
        style.border = "1px solid rgba(0,0,0,0.8)";
        style.padding = "10px";
        style.position = "relative";
        style.margin = "10px";
        style.fontSize = "30px";
        let count = -100;
        let timeClock = setInterval(() => {
            count += 2;
            style.right = count + "%";
            if (count >= 0) {
                clearInterval(timeClock);
            }
        }, 1);
        let count2 = 100;
        setTimeout(() => {
            let timeClock2 = setInterval(() => {
                count2 -= 10;
                style.opacity = count2 / 100;
                if (count2 <= 0) {
                    clearInterval(timeClock2);
                    popStr.remove();
                }
            }, 50);
        }, 1000);
        // 放進去
        pop.appendChild(popStr);
        document.getElementsByTagName("body")[0].appendChild(pop);
    }

    return {
        data: _data,
        ok: _ok,
        err: _no,
        cus: _cus,
    };
}());