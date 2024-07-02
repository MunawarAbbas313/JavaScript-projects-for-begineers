const clock = document.getElementById('display')
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    clock.style.color = 'black';
}, 1000);
