const body = document.body;
const button = document.querySelector('.btn');
const span = document.querySelector('span');

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

button.addEventListener('click',()=>{
    const randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor;
    span.innerText = randomColor;
});