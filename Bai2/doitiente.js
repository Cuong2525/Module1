function ChangeMoney() {
    let Amount = document.getElementById("Soluong").value;
    let FromC = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let Result;


    if (FromC == "dola" && To == "vnd") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "vnd"&& To =="dola"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (FromC == "vnd") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
        
    document.getElementById("SoTienLa").innerHTML = Result;
}