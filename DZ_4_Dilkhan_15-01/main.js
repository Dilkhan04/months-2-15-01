let num = 0;

const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const span = document.getElementById('span');

buttonPlus.onclick = () => {
    ++num;
    span.innerText = num;
}

buttonMinus.onclick = () => {
    --num;
    if (num < 1) {
        num = 0;
    }
    span.innerText = num;
}



