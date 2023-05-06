function design(){
    const container=document.querySelector('.container');
    const formContainer=document.querySelector('.form-container');
    const btn=document.querySelector('.btn');
    const icon=document.querySelector('.close-icon');

    //add event handlers.
    btn.addEventListener('click',()=>{
        container.classList.add('active');
        formContainer.classList.remove('active');
    })
    icon.addEventListener('click',()=>{
        container.classList.remove('active');
        formContainer.classList.add('active');
    })
}
design();