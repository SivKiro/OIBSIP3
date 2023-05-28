
// for temperature conversion
function temperature(){
    let inputval=document.querySelector("#inputval").value;
    let type=document.querySelector("#type");
    let result=document.querySelector("#result");
    if(inputval==""){
        alert("please enter any value......")
        location.reload()
    }
    else if(type.value=="celcius"){
        let Celcius=Number.parseInt(inputval)*1
        result.innerHTML=Celcius.toFixed(4)+ `&deg;C`
    }
    else if(type.value=="kelvin"){
        let Kelvin=Number.parseInt(inputval)+273.15
        result.innerHTML=Kelvin.toFixed(4)+ "K"
    }
    else if(type.value=="fahrenheit"){
        let Fahrenheit=Number.parseInt(inputval)*(9/5)+32
        result.innerHTML=Fahrenheit.toFixed(4)+ "F"
    }
}

// for time
function currentTime(){
    let p1=document.getElementById("p1")
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let current_time = hr + ":" + min + ":" + sec;
    p1.innerHTML= current_time;
    let t =setTimeout( function (){ currentTime() }, 1000);
}
currentTime();
