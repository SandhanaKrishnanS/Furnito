import { UserData } from "./JS/Storage.js";

function data() {
    let UserName = document.querySelector('.I1').value.trim();
    let Email = document.querySelector('.I2').value.trim();
    let password = document.querySelector('.I3').value;
    let val = new storeData(UserName, Email, password);
}