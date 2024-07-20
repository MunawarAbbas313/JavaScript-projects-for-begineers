let InputBox = document.getElementById("Input-box"); 
let Tasks = document.getElementById("list-container");



let submit = document.getElementById("btn")
submit.addEventListener("click", function(){
    
        if(InputBox.value === '')
        { 
          message();
        }
        else {
           let li = document.createElement("li");
           li.innerHTML = InputBox.value;
           Tasks.appendChild(li);
           let span = document.createElement("span");
           span.innerHTML = "\u00d7";
           li.appendChild(span);
           
     
        }
        InputBox.value = '';
        saveData();
        my();
     },false);

     function my()
     {
        Tasks.addEventListener("click", function(e){
            if(e.target.tagName === "LI")
            {
                   e.target.classList.toggle("checked")
                   saveData();
            }
            else if(e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }
     })
    }

function saveData(){
     localStorage.setItem("data", Tasks.innerHTML);
}
function showtask()
{
   Tasks.innerHTML = localStorage.getItem("data");
}
 showtask();



function message()
{
    alert("Please Enter Something")
}

