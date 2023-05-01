const hour=document.getElementById('hour');
const minute=document.getElementById('minutes');
const second=document.getElementById('second');
const ampm=document.getElementById('ampm');

function updateClock(){

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();  
    let ampmValue="AM";

    if(h>12){
        h=h-12;
        ampmValue="PM"
    }

    h= h<10 ? '0' + h : h;
    m= m<10 ? '0' + m : m;
    s= s<10 ? '0' + s : s;

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm.innerText=ampmValue;

    //update the second hand after 1000milliseconds
    setTimeout(()=>{
     updateClock();
    },1000)
}
updateClock();
