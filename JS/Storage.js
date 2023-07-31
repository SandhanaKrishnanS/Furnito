let UserName;
let Email;
let password;
  function data() {
    UserName = document.querySelector('.I1').value.trim();
    Email = document.querySelector('.I2').value.trim();
    password = document.querySelector('.I3').value;
    let errorMessageN = document.getElementById('errorN');
    let errorMessageE = document.getElementById('errorE');
    let errorMessageP = document.getElementById('errorP');
    if(UserName.length >= 5) {
        errorMessageN.textContent = "";
        if(Email.includes("gmail.com")) {
            errorMessageE.textContent = "";
            if(password.length >= 6) {
                window.location.href = '../Furnito/HTML/Login.html';
            }
            else {
                errorMessageP.textContent = "Invalid Password Should contain 6 char";
            }
        }
        else {
            errorMessageE.textContent = "Invalid Email Format";
        }
    }
    else {
        errorMessageN.textContent = "Username Should Contains 5 letter";
    }
    console.log(UserName);
    localStorage.setItem('UserName' , UserName);
    localStorage.setItem('Password' , password);
}

function getName() {
    let val = localStorage.getItem('UserName')
    return val;
}

function getPass() {
    let val = localStorage.getItem('Password');
    return val;
}

function Validate() {
    let Uname = getName();
    let Pword = getPass();
    console.log(Pword);
    let UserName = document.querySelector('.I1').value.trim();
    let password = document.querySelector('.I2').value;
    let errorMessage1 = document.getElementById('error1');
    let errorMessage2 = document.getElementById('error2');

    if (UserName === Uname) {
        errorMessage2.textContent = "";
        if(password === Pword) {
            window.location.href = '../HTML/home.html';
        }
        else {
            errorMessage1.textContent = "Invalid password.";
        }
    } else {
        errorMessage2.textContent = "Username does not exist.";
    } 
}
