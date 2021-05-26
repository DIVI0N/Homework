const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let myColor = 'black';

document.querySelector('#color').oninput = function () {
    myColor = this.value;
}

canvas.onmousedown = () => {
    canvas.onmousemove = (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        ctx.fillRect(x - 5, y - 5, 10, 10);
        ctx.fillStyle = myColor;
        ctx.fill();
    }
    document.onmouseup = () => {
        canvas.onmousemove = null;
    }
}




