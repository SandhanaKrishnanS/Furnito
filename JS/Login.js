import {UserData} from '../JS/Signup.js';

const userData = new UserData();
function Validate() {
    let Uname = userData.getName();
    let Pword = userData.getPass();
    console.log(Pword);
    let UserName = document.querySelector('.I1').value.trim();
    let password = document.querySelector('.I2').value;
    let errorMessage1 = document.getElementById('error1');
    let errorMessage2 = document.getElementById('error2');

    if (UserName === Uname) {
        errorMessage2.textContent = "";
        if(password === Pword) {
            window.location.href = '../HTML/Home.html';
        }
        else {
            errorMessage1.textContent = "Invalid password.";
        }
    } else {
        errorMessage2.textContent = "Username does not exist.";
    }
}