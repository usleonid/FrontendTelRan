let y = null;
let nickname = y || 'Anonymous';
console.log(nickname);
greeting();
greeting('Rododendronus');


function greeting(name = 'Anonymous') {
    // name = name || 'Anonymous';
    // name = name ?? 'Anonymous';
    console.log(`Hello ${name}`);
}