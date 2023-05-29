const storageInput=document.querySelector(".input-storage");
const results=document.querySelector("#results");
const button=document.querySelector(".button");
const storedInput=localStorage.getItem("textinput");

if(storageInput){
    results.textContent=storedInput;
}

storageInput.addEventListener("input", (text)=>{
    results.textContent =text.target.value
})

function savetoStorage(){
    localStorage.setItem("textinput",results.textContent)
}
savetoStorage();

button.addEventListener("click",savetoStorage);