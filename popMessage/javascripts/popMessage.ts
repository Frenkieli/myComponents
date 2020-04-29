type messageType = {
  title: string,
  content: string,
  imgSrc?: string,
}

type colorType = {
  color: string[],
  backColor: string[],
  imgSrc: string[]
}

type popMessageCardBuildReturn = {
  card: HTMLDivElement,
  title: HTMLDivElement,
  content: HTMLDivElement,
  img?: HTMLDivElement,
}

interface colorData {
  colorData: colorType,
  addColor(data: colorType): void
}

interface domBuild {
  init(): void,
  popMessageCardBuild(element: Element, status: number): object,
  main(message: messageType, time: number, callback:() => void): void
}

interface popActive {
  ok(message: messageType, time: number, callback:() => void): void,
  err(message: messageType, time: number, callback:() => void): void,
  cus(message: messageType, i:number,time: number, callback:() => void): void
}

interface popMessageInterface extends colorData, domBuild, popActive { };

export default class PopMessage implements popMessageInterface {
  public colorData: colorType = {
    color: ['#eee', '#eee'],
    backColor: ['#1CAF64', '#AF1C1C'],
    imgSrc: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsSAAALEgHS3X78AAABeklEQVRIx62Vz1XCQBCHv00D0oF4ypF0YEqgA0MFYgd0YKxAqECswFCB8bi32AFUMF4mvH3Dbgh5zgk2O9/Ov/2tExGuWY6bAYVZbj1yHPJzKbgCl8AaWCT8f4DaI9vR8By3BGrgnnH2Cyw90oaLWQS8Bj5uAKN7v3NclYxcP74PRNfp7/nA4au+TGd4jiuBr8jmT2BjU9b9G+DR7D8BhUe6EN5GGrdKNcuU8dUsHzxSOhFJRf3ikXpMwXNcDTyb5Ye+oVXk5HpsNz2y1p6EVvXw0nzYcrvZYMosGKXQ9hPgrflf9DUXk6abAL/gZPyT5TirPWf4KTLDt5qFH3p4Yzs9AW59uizRwKdYmgMlKSM3dd83dKa6cWe0pLim2RpEY309Ms90Oo6qE1bpOpXfoatvwegbcKGKTSS9PottoIqFPiQxZdx5pIrBZxrJYuJEnsEXc67lKYHdBPBbCL72hqb02tpB9b4Z/UAHh8y1vvPgojRa/8YjXcr3D3Xdl5/t7pLiAAAAAElFTkSuQmCC',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8klEQVQ4y7XV2w2CMBiG4beNA5DAvW4gG8gIuEGdTJzAFXQD3IMLN/i8UAwK9OCBhISU9knL//3BSOLX1wIAUzjADcYb1DVRwsTaxeNhBWwGLzaYgiB8B/dvoyfrWbJ/LEoBAbCBw03DHhC4IgmRZyJvRa6Z20nq5zrPvEYS5ll9U2TACVjP7GD33P30dUCdAwZoHEwIHH9TdVegAi6fgtOFSoNH4Pj4rxXOgBZYzoBn1FWpkao9YN8gLh715zCYY/sFOAvbBPDgKd4rnNIpsZ13r74pauAYFZtwg2z745fROQznuLSpwY6BbTIYAZt//KNuI/K4mHCaOJIAAAAASUVORK5CYII='],
  };
  public $body = document.getElementsByTagName("body")[0];
  public status: number = 0;

  constructor() { }

  public addColor(data: colorType): void {
    function pushArray(arr: string[], inArr: string[]) {
      inArr.forEach(v => {
        arr.push(v);
      })
    }
    pushArray(this.colorData.color, data.color);
    pushArray(this.colorData.backColor, data.backColor);
    if (data.imgSrc) {
      pushArray(this.colorData.imgSrc, data.imgSrc);
    }
  }


  public init(): void {
    const that = this;
    const $style = document.createElement('style');
    that.colorData.color.forEach((v, i) => {
      $style.innerHTML +=
        '.popMessage_card.status' + i + '{' +
        'color: ' + v + ';' +
        'background-color: ' + that.colorData.backColor[i] + ';' +
        '}'
        ;
    })
    this.$body.appendChild($style);
  }

  public popMessageCardBuild(element: Element, status: number): popMessageCardBuildReturn {
    let returnData: popMessageCardBuildReturn;

    let card = document.createElement('div');
    card.className = 'popMessage_card status' + status;
    let card_header = document.createElement('div');
    card_header.className = 'popMessage_card_header';
    let card_header_title = document.createElement('div');
    card_header_title.className = 'popMessage_card_title popMessage_card_header_item';
    let card_body = document.createElement('div');
    card_body.className = 'popMessage_card_body';
    element.appendChild(card);
    card.appendChild(card_header);
    card.appendChild(card_body);
    card_header.appendChild(card_header_title);
    returnData = {
      card :  card  ,
      title :  card_header_title  ,
      content :  card_body  ,
    }
    if (this.colorData.imgSrc[status]) {
      let card_header_img = document.createElement('div');
      card_header_img.className = 'popMessage_card_img popMessage_card_header_item';
      let card_header_img_img = document.createElement('img');
      card_header_img_img.src = this.colorData.imgSrc[status];
      card_header.appendChild(card_header_img);
      card_header_img.appendChild(card_header_img_img);
      returnData.img = card_header_img_img;
    }
    return returnData;
  }

  public ok(message: messageType, time = 2000, callback = function () { }) {
    this.status = 0;
    this.main(message, time , callback);
  }
  public err(message: messageType, time = 2000, callback = function () { }) {
    this.status = 1;
    this.main(message, time , callback);
  }
  public cus(message: messageType, i:number,time = 2000, callback = function () { }) {
    this.status = i + 2;
    this.main(message, time , callback);
  }

  public main(message: messageType, time = 2000, callback = function () {}) {
    // console.log(colorData,'顏色');
    var pop: HTMLElement;
    if (document.getElementById("popMessage_module")) {
      pop = document.getElementById("popMessage_module") as HTMLDivElement;
    } else {
      pop = document.createElement("div");
      pop.id = "popMessage_module";
      setTimeout(() => {
        document.getElementsByTagName("body")[0].appendChild(pop);
      }, 1);
    }
    pop.className = 'popMessage';
    let popContent = this.popMessageCardBuild(pop, this.status);
    popContent.title.innerText = message.title;
    popContent.content.innerText = message.content;
    popContent.card.addEventListener('click', callFunction);
    let timeClock: number;
    let count2 = 100;
    let timeClock2: number;
    function callFunction() {
      clearTimeout(timeClock);
      clearInterval(timeClock2);
      popContent.card.remove();
      callback();
    }
    timeClock = setTimeout(() => {
      timeClock2 = setInterval(() => {
        count2 -= 10;
        popContent.card.style.opacity = (count2 / 100).toString();
        if (count2 <= 0) {
          callFunction();
        }
      }, 50);
    }, time);
    // 放進去
  }
}