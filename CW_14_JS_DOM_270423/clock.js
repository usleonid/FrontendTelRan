setInterval(printTime, 1000);
console.log(root.firstElementChild);
console.log(root.firstChild);

function printTime() {
    const d = new Date();
    // console.log(d);
    const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    const time = `${h} : ${m} : ${s}`
    const h1 = document.createElement('h1');
    const text = document.createTextNode(time);
    h1.appendChild(text);

    const root = document.getElementById('root');
    if (!root.children) {
        root.appendChild(h1);
    } else {
        root.replaceChild(h1, root.firstElementChild);
    }
}
