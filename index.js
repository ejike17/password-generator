const generatePassword = document.querySelector(".generate-password");
const hidePassword = document.querySelector(".hide-pass")
const rootEl = document.getElementById("root");
const rootsEl = document.getElementById("roots");

const allChar = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'U', 'I', 'O', 'P', 'A', 'S', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '{', '}', '[', ']', '|', "<", ">", ",", ".","/","'", '"', ";",":"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]

generatePassword.addEventListener("click", passGen);
hidePassword.addEventListener('click', passHide)

function passGen() {
    let password = "";
    rootEl.innerText =  password
    for (let i = 0; i < 16; i++){
        let allRandom = Math.floor(Math.random() * allChar.length)
        let selectedRandom = allChar[allRandom];
        let randomChar = selectedRandom[Math.floor(Math.random() * selectedRandom.length)];
        password += randomChar;
    }
    rootEl.innerText = password;
    rootsEl.innerText = password;
    rootsEl.style.display = 'none';
}


let hide = true;


function passHide() {
    const dots = "***************";
    const pass = rootsEl.innerText;

    if (pass === '') {
        rootEl.innerText = "No password generated yet. Click on generate password button."
    }else if (hide) {
        hide = !hide
        rootEl.innerText = dots
        hidePassword.value = "Show Password"
    } else {
        hide = !hide
        rootEl.innerText = pass
        hidePassword.value = "Hide Password"
    }
}
