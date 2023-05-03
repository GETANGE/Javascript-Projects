const navbar=document.querySelector('.navbar');
const bottomContainer=document.querySelector('.bottom-container');


console.log(navbar.offsetHeight);
console.log(bottomContainer.offsetTop);
//add event listener to the navigation bar
window.addEventListener('scroll',()=>{
    if(window.scrollY>bottomContainer.offsetTop-
        navbar.offsetHeight-30
        ) {
            navbar.classList.add('active');
    }
    else{
        navbar.classList.remove('active');
    }
})