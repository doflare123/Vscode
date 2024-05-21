mas =[];

function clickButton() {
    if(event.target.id == "C")
        area.value = "";
    else if(event.target.id == "⌫"){
        var last = area.value.toString().slice(-1);
        area.value = area.value.replace(last, '');
    }
    else if(event.target.id == "%"){
        let val = area.value;
        area.value = "";
        area.value += "\n" + val;
    }
      
    else
        area.value += event.target.id;
    
    
}