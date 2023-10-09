let pos = 0;
let direction = 1;

const t = setInterval(move, 20)

function move() {
    pos += direction;
    if (pos >= 150 || pos <= 0) {
        direction = -direction;
    } else {
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
    }
}

// let flag = true;

// function move() {
//     box.style.left = pos + 'px';
//     box.style.top = pos + 'px';
//     if (flag) {
//         pos++;
//     } else {
//         pos--;
//     }
//     if (pos >= 150) {
//         flag = false;
//     }
//     if (pos <= 0) {
//         flag = true;
//     }   
// }