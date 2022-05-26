const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const cashGivenLabel = document.querySelector("#cash-given-label");
const errorMessage = document.querySelector("#error-message");
const returnChange = document.querySelector("#return-change");
const numberOfNotes = document.querySelectorAll(".number-of-notes");

function setErrorMessageNone(){
    errorMessage.style.display ="none";
}

function setCashGivenDisplayNone(){
    cashGivenLabel.style.display ="none";
    cashGiven.style.display= "none"; 
    checkButton.style.display="none";
    
}
function setReturnChangeDisplayNone(){
    returnChange.style.display ="none";
}
function setErrorMessage(message_val){
    errorMessage.style.display ="block";
    errorMessage.innerText = message_val; 
}

function setCashGivenDisplayBlock(){
    cashGivenLabel.style.display ="block";
    cashGiven.style.display= "block"; 
    checkButton.style.display="block";
    
}
function setReturnChangeDisplayBlock(){
    returnChange.style.display ="block";
}

setErrorMessageNone();
setCashGivenDisplayNone();
setReturnChangeDisplayNone();

const availableNotes = [2000, 500, 200, 100,50,20,10,5,2,1]

nextButton.addEventListener("click", function nextButtonListener(){    
    setErrorMessageNone();
    setErrorMessageNone();
    if (billAmount.value >=0){
        setCashGivenDisplayBlock();
        checkButton.addEventListener("click",function checkButtonListener(){
            setErrorMessageNone();
            const amountToReturn =    cashGiven.value - billAmount.value;
            if(amountToReturn >=0 ){
                setReturnChangeDisplayBlock();
                calculateChange(amountToReturn);
            }
            else{
                //Can also use 'Number()' instead of '+' below
                if(Number.isInteger(+billAmount.value)){
                    setErrorMessage("Please enter correct Cash- given. The value must be Integer and greater than Billed amount.");
                    setReturnChangeDisplayNone();
                }
                else{
                    setErrorMessage("Please enter correct Cash- given. The Cash- given can only be Integer.");
                    setReturnChangeDisplayNone();
                }
            }
        })
        
    }else{
        //Can also use 'Number()' instead of '+' below
        if(Number.isInteger(+billAmount.value)){
            setErrorMessage("Please enter correct billed- amount. The value must be Integer and  than 0.");
            
        }
        else{
            setErrorMessage("Please enter correct billed- amount. The billed- amount can only be Integer.");
        }
    }
});

function calculateChange(amountToReturn){
    console.log(amountToReturn);
    
    for (let i = 0; i< availableNotes.length ; i++){
        const NoOfNotes = Math.trunc(  amountToReturn/ availableNotes[i]);
        amountToReturn =  amountToReturn % availableNotes[i];
        numberOfNotes[i].innerText = NoOfNotes;
    }
}