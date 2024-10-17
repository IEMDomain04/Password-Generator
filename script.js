// Array of Characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// HTML Text
let firstPassword = document.getElementById("password1")
let secondPassword = document.getElementById("password2")

// Strong Password generator function
function generatePassword() {
    let pass1 = []
    let pass2 = []

    for(let i = 0; i <= 13; i++)
    {
        let random1 = Math.floor(Math.random()*characters.length) + 1
        let random2 = Math.floor(Math.random()*characters.length) + 1
        pass1.push(characters[random1])
        pass2.push(characters[random2])
    }

    firstPassword.textContent = pass1.join("")
    secondPassword.textContent = pass2.join("")
}

// Copy Function 1
function copyPassword1() {
    navigator.clipboard.writeText(firstPassword.textContent) // Copy text to clipboard
                .then(() => {
                    alert('Text copied to clipboard:', firstPassword.textContent);
                })
                .catch(err => {
                    alert('Text copied to clipboard:', firstPassword.textContent);
                });
}

// Copy Function 2
function copyPassword2() {
    navigator.clipboard.writeText(secondPassword.textContent).then(() => {
        alert("Text Copied to clipboard:", secondPassword.textContent);
    })
    .catch(err => {
        alert("Text Copied to clipboard:", secondPassword.textContent);
    });
}
