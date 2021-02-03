"use-strict"

const arrows = document.querySelectorAll(".drop-down")
const details = document.querySelectorAll(".detail>p")
const dropDowns = document.querySelectorAll(".container")
const questions =  document.querySelectorAll(".question > p")

// dropDowns.forEach(element => element.addEventListener("click", dropDetail))


for(let i = 0 ; i < dropDowns.length ; i++){
    dropDowns[i].addEventListener("click", function(){

        if(details[i].classList.contains("hidden")){
            details[i].classList.remove("hidden")   
            details[i].classList.add("show")
            questions[i].classList.add("bold")
            arrows[i].classList.add("rotate")
        }else{
            details[i].classList.add("hidden")
            details[i].classList.remove("show")
            questions[i].classList.remove("bold")
            arrows[i].classList.remove("rotate")
        }
        console.log(details[i])
    });
}