"use strict";

let monkeyBtn = document.getElementById('monkeyButton');

monkeyBtn.addEventListener('click', function(){

    if(monkeyBtn.innerText === "🙈")
    {
        monkeyBtn.innerText = "🙉";
    } 
    else
    {
        monkeyBtn.innerText = "🙈";
    }

});