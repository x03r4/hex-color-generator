let btn = document.querySelector('.button');
btn.addEventListener("click", changeColor);
let bcg = document.querySelector('body');
let output = document.querySelector('.color_text');
let space = document.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) {
        changeColor();
    }
});

function changeColor() {
    let colorek = colorDraw();
    output.innerHTML = colorek;
    output.style.color = colorek;
    bcg.style.backgroundColor = colorek;
}

function colorDraw(){
    const values = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`, `f`];
    const color = [];
    color[0] = `#`;

    for (let i = 1; i <= 6; i++) {
        let insert = Math.floor(Math.random()*16);
        color.push(values[insert]);
    } 
    let colorString = color.join('')
  return colorString;
    }

