console.log('JavaScript file loaded');

const body = document.querySelector('body');
const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
let xyx;
function RandomGen(number) {
  return Math.floor(Math.random() * number);
}

function colorChnager() {
  const red = RandomGen(256);
  const green = RandomGen(256);
  const blue = RandomGen(256);
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}



startbtn.addEventListener('click', () => {
    xyz = setInterval( colorChnager, 1000)
})
stopbtn.addEventListener('click', ()=>{
    clearInterval(xyz);
})