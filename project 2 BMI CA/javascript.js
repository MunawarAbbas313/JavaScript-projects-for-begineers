const dark = document.querySelector('#dark');
const body = document.querySelector('body');
dark.addEventListener('click', (bt) => {
    if(bt.target.id === 'dark') {
        body.style.backgroundColor = 'black';
    }
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value); // Changed to parseFloat
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Invalid Height. Try Again.`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Invalid Weight. Try Again.`;
    } else {
        const bmi = (weight / (height * height)).toFixed(2); // Direct calculation with height in meters
        if(bmi > 18 && bmi < 25)
        {
            result.innerHTML = `BMI = ${bmi} Result " Normal "`;
            result.style.color = 'green';
           
        }
        else if(bmi > 25 && bmi < 35)
            {
                result.innerHTML = `BMI = ${bmi} Result " Very Hight "`;
                result.style.color = 'red';
        
            }
            else if(bmi > 35)
                {
                    result.innerHTML= ' INVLAID HEIGHT OR WIDTH : EROOR '
                }
                else 
                {
                    result.innerHTML = ` BMI : ${bmi} result " LOW "`
                    result.style.color = ' blue';
                }
    }
});
