let change = 1;

function changeMode() {
    if (change==1) {
        ModeToDecimal();
        change--;
        console.log(change);
    } else {
        ModetoBinary();
        change++;
        console.log(change);
    }
    
}
function btnConvert() {
    if (change==1) {
        let inputData = document.getElementById("input-data").value;
        console.log(inputData)
        let resultDecimal = bToD(inputData);
        let resultData = document.getElementById("result-data");
        resultData.innerHTML = resultDecimal;
    } else {
        let inputData = document.getElementById("input-data").value;
        console.log(inputData)
        let resultDecimal = dToB(inputData);
        let resultData = document.getElementById("result-data");
        resultData.innerHTML = resultDecimal;

    }
}
// let result = document.getElementById("result-data");
// Change Mode
function ModeToDecimal() {
    let insert = document.getElementById("insert");
    let btn = document.getElementById("change-mode");
    let label = document.getElementById("label-input");
    let inputData = document.getElementById("input-data");
    let convertTo = document.getElementById("convertTo");
    insert.innerHTML = "Insert Deciaml";
    btn.innerHTML = "Mode Decimal";
    label.innerHTML = "Decimal:"
    inputData.placeholder = "Insert Decimal";
    convertTo.innerHTML = "Convert to binary"
}
function ModetoBinary() {
    let insert = document.getElementById("insert");
    let btn = document.getElementById("change-mode");
    let label = document.getElementById("label-input");
    let inputData = document.getElementById("input-data");
    let convertTo = document.getElementById("convertTo");
    insert.innerHTML = "Insert Binary";
    btn.innerHTML = "Mode Binary";
    label.innerHTML = "Binary:"
    inputData.placeholder = "Insert Binary";
    convertTo.innerHTML = "Convert to decimal";
}


// Convert
function bToD(Binary) {
    let decimal = 0;
    let reversedNumber = "";
    let lenNumber = Binary.length - 1;
    while (lenNumber >= 0) {
        reversedNumber = reversedNumber + Binary[lenNumber];
        lenNumber-=1;
    }

    for (let i = 0; i<reversedNumber.length; i++) {
        if (reversedNumber[i] == "1") {
            decimal += 2**i
        }
    }
    return decimal;
}

function dToB(Decimal) {
    let Binary = ""
    if (Decimal == 0) {
        return 0;
    } else if (Decimal < 0) {
        return "ไม่สามารถหาค่าได้!";
    }
    while (Decimal > 0) {
        if (Decimal%2 != 0) {
            Binary += "1"
        } else {
            Binary += "0"
        }
        Decimal = Math.floor(Decimal/2);
    }

    let reverseBinary = ""
    let lenBinary = Binary.length - 1;
    while (lenBinary >= 0) {
        reverseBinary += Binary[lenBinary];
        lenBinary -= 1;
    }
    return reverseBinary;
}