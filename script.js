function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    if (isNaN(value) || value < 0) {
        document.getElementById("result").innerHTML = "Please enter a valid value";
        return;
    }

    let result = 0;
    
   
    if (fromUnit === "meter") {
        result = value; 
    } else if (fromUnit === "kilometer") {
        result = value * 1000; 
    } else if (fromUnit === "centimeter") {
        result = value / 100;
    }

    if (toUnit === "meter") {result
        result = result;
    } else if (toUnit === "kilometer") {
        result = result / 1000; 
    } else if (toUnit === "centimeter") {
        result = result * 100; 
    }

  
    document.getElementById("result").innerHTML = `result: ${result.toFixed(2)} ${getUnitName(toUnit)}`;
}
function getUnitName(unit) {
    switch (unit) {
        case "meter":
            return  "meter";
        case "kilometer":
            return "kilometer";
        case "centimeter":
            return "centimeter" ;
        default:
            return "";
    }
}

