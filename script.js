const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function checkNumber() {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 

  if(userInput.value === "") {
    alert("Please provide a phone number");
  }

  let item = document.createElement('li');
  resultsDiv.appendChild(item);

  if(regex.test(userInput.value)) {
    item.style.visibility="visible";
    item.innerHTML = "Valid US number: "+ userInput.value;    
  } else {
    item.style.visibility="visible";
    item.innerHTML = "invalid US number: "+ userInput.value;    
  }
} 

checkBtn.addEventListener("click",checkNumber);

clearBtn.addEventListener("click",()=>{
  resultsDiv.innerHTML = "";
})