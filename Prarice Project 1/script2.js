const value = document.querySelectorAll('.button')
const body = document.querySelector('body')
const head = document.querySelector('h2')

value.forEach((button) => {
    button.addEventListener('click', function(e){
        
           switch(e.target.id)
        {
            case 'grey':
            body.style.backgroundColor = e.target.id;
            head.style.color = ''
            break;
            case 'black':
                body.style.backgroundColor = e.target.id;
                head.style.color = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                head.style.color = 'yellow';
                break;
                default :
                body.style.backgroundColor = 'green'
                head.style.color = '';
                button.style.backgroundColor= ''
                break;
        }
    })
})