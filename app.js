
var btn = document.querySelector('button');
var body = document.querySelector('body');
var span = document.querySelector('span');

// Add 'green', 'teal', 'blue' into the array
var colorArr = ['red', 'yellow', 'pink']

var rand = Math.floor(Math.random()* colorArr.length)



btn.addEventListener("click", () => body.style.background= colorArr[rand] );
btn.addEventListener("click", () => span.innerText = colorArr[rand] );

