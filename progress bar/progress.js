let circularProgress=document.querySelector('.circular-progress');
let progressValue=document.querySelector('.progress-value');

let progressStartValue=0,
    progressEndValue=90;

let progress= setInterval(()=>{
    progressStartValue++;

    progressValue.textContent=`${progressStartValue}%`
    circularProgress.style.background=`conic-gradient(purple,${progressStartValue * 3.6}deg,whitesmoke 0deg)`
    if(progressStartValue==progressEndValue){
        clearInterval(progress)// stop the progress
    }
},100);