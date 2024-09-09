let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?","/"];

let password1 = []
let password2 = []
let pass1El = document.getElementById("password1")
let pass2El = document.getElementById("password2")
let password1Final
let password2Final

function generatePass() {
    if (pass1El.childNodes.length === 0 || pass2El.childNodes.length === 0) {
        for (let i = 0; i < 15; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password1[i] = characters[index] 
        } 
        for (let i = 0; i < 15; i++) {
            let index = Math.floor(Math.random() * characters.length)
            password2[i] = characters[index]
            
        }
        password1Final = password1.join("")  
        pass1El.textContent += password1Final
        password2Final = password2.join("")
        pass2El.textContent += password2Final
    } else {
        pass1El.textContent = ""
        pass2El.textContent = ""
        generatePass()
        password1Final = password1.join("")  
        pass1El.textContent += password1Final
        password2Final = password2.join("")
        pass2El.textContent += password2Final

    } 
}

function copyPass(password) {
  navigator.clipboard.writeText(password);
}
