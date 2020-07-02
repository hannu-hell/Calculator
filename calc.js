function calculate(){
	var a = parseInt(document.querySelector("#val1").value);
	var b = parseInt(document.querySelector("#val2").value);
        var calc = document.querySelector("#op").value;
        var result;
        if (calc == "add"){
            result = a + b;
        }
        else if (calc == "sub"){
            result = a - b;
        }
        else if (calc == "mul"){
            result = a * b;
        }
        else if (calc == "div"){
            result = a / b;
        }
        document.querySelector("#res").innerHTML = result;
}
