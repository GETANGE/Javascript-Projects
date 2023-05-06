const container=document.querySelector(".container");
const btn=document.querySelector(".btn");
const popupContainer=document.querySelector(".popup-container");
const icon=document.querySelector(".close-icon");

//add eventlistener to the button.
btn.addEventListener("click",()=>{
    container.classList.add("active");//becomes blurred.
    popupContainer.classList.remove("active");
})

//add eventlistener to the close icon.
icon.addEventListener("click",()=>{
    container.classList.remove("active");
    popupContainer.classList.add("active");
})