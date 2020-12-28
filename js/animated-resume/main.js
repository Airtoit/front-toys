let raw = `/* 你好，我叫daytick
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    width: 200px;
    height: 200px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1 {
  background: linear-gradient(to right, #000 50%, #fff 50%);
}
/* 加两个神秘的小球 */
#div1::before {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  left: 50%;
  top: 0;
  background: #000;
  transform: TranslateX(-50%);
  background: radial-gradient(circle, #fff 15%, #000 15%);
}
#div1::after {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  background: #fff;
  transform: TranslateX(-50%);
  background: radial-gradient(circle, #000 15%, #fff 15%);
}`;

let html = document.querySelector('#html');
let style = document.querySelector('#style');
let i = 0;
let content = '';
let interval = setInterval(() => {
    console.log('in...')
    content += raw[i] === '\n' ? '<br/>' :
        (raw[i] === ' ') ? '&nbsp;' : raw[i];
    html.innerHTML = content;
    style.innerHTML = raw.substring(0 ,i);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    i++;
    if (raw[i] === undefined) {
        clearInterval(interval);
    }
}, 0);