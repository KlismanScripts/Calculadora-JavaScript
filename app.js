const actionButton = document.querySelectorAll(".action-button");
const actualAction = document.querySelector(".actual-action");
const operations = document.querySelectorAll(".operation");
const secondScreen = document.querySelector(".second-screen");


//OPERATION EVENTS
let prevValue = "";
let inputValue = "";
let resultado = 0;

operations.forEach(element => {
    element.addEventListener("click", function () {
        if (secondScreen.innerHTML == "") {
            secondScreen.innerHTML = "0"
        }


        if (element.innerHTML !== "=") {
            if (element.innerHTML == "C") {
                inputValue = ""
                actualAction.value = inputValue
                secondScreen.innerHTML = "";
            }
            else if (secondScreen.innerHTML[secondScreen.innerHTML.length - 1] == "=") {
                secondScreen.innerHTML = resultado;
                secondScreen.innerHTML += element.innerHTML
                inputValue = ""
            } else {
                secondScreen.innerHTML += element.innerHTML
                inputValue = ""
            }           


        } else if (element.innerHTML == "=") {
            resultado = eval(secondScreen.innerHTML);
            console.log(resultado);
            actualAction.value = resultado;
            secondScreen.innerHTML += `=`;
        } 


    })

})





//CLASE ACTION-BUTTONS

actionButton.forEach(element => {


    element.addEventListener("click", function () {
        
        inputValue += element.innerHTML;
        actualAction.value = inputValue;
        secondScreen.innerHTML += element.innerHTML

    })

})




