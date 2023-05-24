//adding functionality to the radio buttons
function validate() {
    let valid = false;
    const radio = document.getElementsByName("radioBtn");

    // Loop through the radio buttons
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            valid = true;
            break; // Exit the loop since one radio button is checked
        }
    }
    if(valid){
        alert("Check is Successful!");
    }else{
        alert("Check atleast one radio button");
        return false;
    }
}

let Emmanuel={
    Name: "Name: Emmanuel Getange",
    Occupation: "Occupation: Fullstack web developer",
    BaseSalary: "Base salary: $150000",
    Gender:"Gender: Male"
}

function emmanuel1(){
    document.getElementById("info").innerHTML=Emmanuel.Name+"<br>"
    +Emmanuel.Occupation+"<br>"+Emmanuel.BaseSalary+"<br>"+Emmanuel.Gender
}

let joy={
    Name: "Name: JoyElizabeth Mothoni",
    Occupation: "Occupation: Fullstack web developer",
    BaseSalary: "Base salary: $150000",
    Gender:"Gender: Female"
}

function joy1(){
    document.getElementById("info").innerHTML=joy.Name+"<br>"
    +joy.Occupation+"<br>"+joy.BaseSalary+"<br>"+joy.Gender
}

let Daniel={
    Name: "Name: DanielBrian Gatuhu",
    Occupation: "Occupation: Backend Android developer",
    BaseSalary: "Base salary: $150000",
    Gender:"Gender: Male"
}

function Daniel1(){
    document.getElementById("info").innerHTML=Daniel.Name+"<br>"
    +Daniel.Occupation+"<br>"+Daniel.BaseSalary+"<br>"+Daniel.Gender
}

let Emilio={
    Name: "Name: Emilio Kariuki",
    Occupation: "Occupation: Fullstack Flutter developer",
    BaseSalary: "Base salary: $150000",
    Gender:"Gender: Male"
}

function emilio1(){
    document.getElementById("info").innerHTML=Emilio.Name+"<br>"
    +Emilio.Occupation+"<br>"+Emilio.BaseSalary+"<br>"+Emilio.Gender
}

let Anthony={
    Name: "Name: Anthony Momanyi",
    Occupation: "Occupation: Android developer",
    BaseSalary: "Base salary: $150000",
    Gender:"Gender: Male"
}

function Anthony1(){
    document.getElementById("info").innerHTML=Anthony.Name+"<br>"
    +Anthony.Occupation+"<br>"+Anthony.BaseSalary+"<br>"+Anthony.Gender
}