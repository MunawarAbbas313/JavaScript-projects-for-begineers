const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";
const selcted = document.querySelectorAll(".dropDown select")
const inputValue = document.querySelector(".AmountInput");
const btn = document.querySelector(".mybtn");
const fromCur = document.querySelector(".from select");
const ToCur = document.querySelector(".to select");


for(select of selcted)
{
  for(currcode in countryList)
    {
      
      let newOption = document.createElement("option");
      newOption.innerHTML = currcode;
      newOption.value = currcode;
      if(select.name ==="From" && currcode ==="USD")
      {
        newOption.selected =" selcted";
      }
      if(select.name ==="to" && currcode ==="PKR")
        {
          newOption.selected =" selcted";
        }
      select.append(newOption)
    
    }
    select.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
    })
}
  
const updateFlag =(element)=>{
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  
}

btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector("input");
  if(amount.value < 1 || amount.value === "" )
  {
    alert("Invlaid")
  }

  
  const endpoint = `currencies/${fromCur.value}.json`;
  const URL = `${BASE_URL}/${endpoint}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCur.value][ToCur.value];
  let convertedAmount = amount.value * rate;
  console.log(convertedAmount);
  
})


// const promise = async ()=>{
//   const response = await fetch(BASE_URL);
//   const data = await response.json();
//   console.log(data);
//   console.log("Lodaing data");
  
  
// }
// promise();