function convert(){

let temp=document.getElementById("temp").value;
let unit=document.getElementById("unit").value;

let c,f,k;

let error=document.getElementById("error");

error.innerHTML="";

if(temp==""){
    error.innerHTML="💗 Please enter a temperature.";
    return;
}

temp=parseFloat(temp);

if(isNaN(temp)){
    error.innerHTML="💗 Please enter a valid number.";
    return;
}

if(unit=="C"){

    if(temp<-273.15){
        error.innerHTML="❄ Temperature cannot be below Absolute Zero!";
        return;
    }

    c=temp;
    f=(temp*9/5)+32;
    k=temp+273.15;
}

else if(unit=="F"){

    if(temp<-459.67){
        error.innerHTML="❄ Temperature cannot be below Absolute Zero!";
        return;
    }

    c=(temp-32)*5/9;
    f=temp;
    k=c+273.15;
}

else{

    if(temp<0){
        error.innerHTML="❄ Temperature cannot be below Absolute Zero!";
        return;
    }

    c=temp-273.15;
    f=(c*9/5)+32;
    k=temp;
}

document.getElementById("c").innerHTML="🌸 Celsius : "+c.toFixed(2)+" °C";

document.getElementById("f").innerHTML="💖 Fahrenheit : "+f.toFixed(2)+" °F";

document.getElementById("k").innerHTML="🎀 Kelvin : "+k.toFixed(2)+" K";

}
