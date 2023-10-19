import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSetting = {
    databaseURL:"https://playground-bffce-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSetting)
const database=getDatabase(app)
const shoppingListinDB=ref(database,"shoppingList")

const inputF= document.getElementById("input-field");
const addBtn=document.getElementById("add-btn");
const shoppingList=document.getElementById("shopping-list")

addBtn.addEventListener("click", function(){
    let inputValue=inputF.value;
    push(shoppingListinDB , inputValue);
    inputF.value="";
    shoppingList.innerHTML+=`<li>${inputValue}</li>`
    console.log(inputValue);
})