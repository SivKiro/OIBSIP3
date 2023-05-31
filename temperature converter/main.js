
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

