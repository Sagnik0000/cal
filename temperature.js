const textbox = document.getElementById("textbox")
const CtoF = document.getElementById("CtoF")
const FtoC = document.getElementById("FtoC")
const CtoK = document.getElementById("CtoK")
const KtoC = document.getElementById("KtoC")
const FtoK = document.getElementById("FtoK")
const KtoF = document.getElementById("KtoF")

const result = document.getElementById("result")
let temp

function convert(){
    if(CtoF.checked){
        temp = Number(textbox.value)
        temp = (temp * 9 / 5) + 32
        result.textContent = temp + ' F'


    }
    else if(FtoC.checked){
        temp = Number(textbox.value)
        temp = (temp-32) * 5 / 9 
        result.textContent = temp + ' C'

    }

    else if(CtoK.checked){
        temp = Number(textbox.value)
        temp = temp + 273.15
        result.textContent = temp + ' K'

    }

    else if(KtoC.checked){
        temp = Number(textbox.value)
        temp = temp - 273.15
        result.textContent = temp + ' C'
        
    }

    else if(FtoK.checked){
        temp = Number(textbox.value)
        temp = ((temp - 32) * 5 / 9 ) + 273.15
        result.textContent = temp + ' K'
        
    }

    else if(KtoF.checked){

        temp = Number(textbox.value)
        temp = ((temp - 273.15) * 9 / 5 ) + 32 
        result.textContent = temp + ' F'
        
    }


    else{
        result.textContent = "Select a Unit !!";
    }

}