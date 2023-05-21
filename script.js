var screen = document.querySelector('.inputfield');
var buttons = document.querySelectorAll('.btn');
let history = document.getElementById('history');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        screen.value += e.target.innerText;
    })
}

function calculate(v) {
    let para = document.createElement('p');
    para.classList.add("temp");
    data = v + " = " + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}

function yeah(){
    var para1 = document.querySelector('#history');
    text1.addEventListener('click', history_select(text1));
}

var text1 = document.querySelector('.temp');
text1.addEventListener('click', history_select(text1));
function history_select(text1){
    let what = text1.innerText;
    let myArray = what.split("=");
    screen.value = myArray[0];
}

function backsp() {
    screen.value = screen.value.substring(0, screen.value.length - 1);
}

function sine() {
    screen.value = Math.sin(screen.value);
}

function cosine() {
    screen.value = Math.cos(screen.value);
}

function tangent() {
    screen.value = Math.tan(screen.value);
}

function square() {
    return Math.pow(screen.value, 2);
}

function cube() {
    return Math.pow(screen.value, 3);
}

function sqrt() {
    return Math.sqrt(screen.value);
}

function cbrt() {
    return Math.cbrt(screen.value);
}

function factorial() {
    let n = screen.value;
    n = parseInt(n);
    let i = 1;
    let ans = 1;
    for (i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

