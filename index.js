import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
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
    clearInputField();
})
onValue(shoppingListinDB,function(snapshot){
    let itemsArray=Object.entries(snapshot.val())
    clearShoppingList();
    for(let i=0;i<itemsArray.length;i++){
        let currentItem=itemsArray[i];
        let currentID=currentItem[0]
        let currentValue=currentItem[1]
        appendToShoppingList(currentValue);
    }
})
function clearInputField(){
    inputF.value="";
}
function clearShoppingList(){
    shoppingList.value="";
}
function appendToShoppingList(itemValue){
    //shoppingList.innerHTML+=`<li>${itemValue}</li>`
    let itemID=item[0];
    let itemValue=item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    shoppingList.append(newEl)
}
