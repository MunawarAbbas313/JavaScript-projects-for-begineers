const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const heading = document.querySelector('h2'); 

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = '';
    } else if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = 'white'; 
    } else if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = '';
    } else {
      body.style.backgroundColor = 'blue';
      heading.style.color = 'aqua';
    }
  });
});
// DM FOR SOURCE CODE !!!!!!!!!