const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const textOutput = document.querySelector("#text-output");

function compareValues(sum, lucktNumber){
    textOutput.style.display = "block";
    if(sum % lucktNumber === 0){
        textOutput.innerText = "Yay! Your Birthday is Lucky 🥳";
    }else{
        textOutput.innerText = "Sorry! Your Birthday is not Lucky 😔";
    }
}

function checkBirthdayIsLucky(){
    const dDate = dateOfBirth.value;
    const sum = calculateSum(dDate);
    if(sum && dDate)
    compareValues(sum, luckyNumber.value);
    else
    textOutput.innerText = "Please Enter Valid Inputs";
}


function calculateSum(dDate){
    dDate = dDate.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dDate.length; i++){
        sum += Number(dDate.charAt(i));
    }
    return sum;
}



checkNumberButton.addEventListener("click", checkBirthdayIsLucky);