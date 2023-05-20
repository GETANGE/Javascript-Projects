let outputscreen=document.getElementById('outputscreen');
 function display(number){
    outputscreen.value += number;
 }

 function Calculate(){
    try{
        outputscreen.value =eval(outputscreen.value);
    }
    catch(err){
        alert('Error');
    }
 }

 function Clear(){
    outputscreen.value ="";
 }
 function del(){
    outputscreen.value =outputscreen.value.slice(0,-1);
 }