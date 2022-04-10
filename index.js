var convertion = document.getElementById("button");
convertion.addEventListener("click", convertSystem);

var number =  document.getElementById("number");
var error =  document.getElementById("error");
var number_systems = document.getElementById("number_systems");

var binary = document.getElementById("span__binary");
var ternary = document.getElementById("span__ternary");
var quaternary = document.getElementById("span__quaternary");
var quinary = document.getElementById("span__quinary");
var senary = document.getElementById("span__senary");
var septenary = document.getElementById("span__septenary");
var octonary = document.getElementById("span__octonary");
var nonary = document.getElementById("span__nonary");
var decimal = document.getElementById("span__decimal");
var undecimal = document.getElementById("span__undecimal");
var duodecimal = document.getElementById("span__duodecimal");
var tridecimal = document.getElementById("span__tridecimal");
var tetradecimal = document.getElementById("span__tetradecimal");
var pentadecimal = document.getElementById("span__pentadecimal");
var hexadecimal = document.getElementById("span__hexadecimal");

function binaryConversion(x){
    var binaryNumber = Number(x).toString(2);
    return binaryNumber;
}

function ternaryConversion(x){
    var ternaryNumber = Number(x).toString(3);
    return ternaryNumber;
}

function quaternaryConversion(x){
    var quaternaryNumber = Number(x).toString(4);
    return quaternaryNumber;
}

function quinaryConversion(x){
    var quinaryNumber = Number(x).toString(5);
    return quinaryNumber;
}

function senaryConversion(x){
    var senaryNumber = Number(x).toString(6);
    return senaryNumber;
}

function septenaryConversion(x){
    var septenaryNumber = Number(x).toString(7);
    return septenaryNumber;
}

function octonaryConversion(x){
    var octonaryNumber = Number(x).toString(8);
    return octonaryNumber;
}

function nonaryConversion(x){
    var nonaryNumber = Number(x).toString(9);
    return nonaryNumber;
}

function decimalConversion(x){
    var decimalNumber = Number(x).toString(10);
    return decimalNumber;
}

function undecimalConversion(x){
    var undecimalNumber = Number(x).toString(11);
    return undecimalNumber;
}

function duodecimalConversion(x){
    var duodecimalNumber = Number(x).toString(12);
    return duodecimalNumber;
}

function tridecimalConversion(x){
    var tridecimalNumber = Number(x).toString(13);
    return tridecimalNumber;
}

function tetradecimalConversion(x){
    var tetradecimalNumber = Number(x).toString(14);
    return tetradecimalNumber;
}

function pentadecimalConversion(x){
    var pentadecimalNumber = Number(x).toString(15);
    return pentadecimalNumber;
}

function hexadecimalConversion(x){
    var hexadecimalNumber = Number(x).toString(16);
    return hexadecimalNumber;
}

function writeNumbers(numbers){
    binary.innerHTML = binaryConversion(numbers);
    ternary.innerHTML = ternaryConversion(numbers);
    quaternary.innerHTML = quaternaryConversion(numbers);
    quinary.innerHTML = quinaryConversion(numbers);
    senary.innerHTML =senaryConversion(numbers);
    septenary.innerHTML = septenaryConversion(numbers);
    octonary.innerHTML = octonaryConversion(numbers);
    nonary.innerHTML = nonaryConversion(numbers);
    decimal.innerHTML = decimalConversion(numbers);
    undecimal.innerHTML = undecimalConversion(numbers);
    duodecimal.innerHTML = duodecimalConversion(numbers);
    tridecimal.innerHTML = tridecimalConversion(numbers);
    tetradecimal.innerHTML = tetradecimalConversion(numbers);
    pentadecimal.innerHTML = pentadecimalConversion(numbers);
    hexadecimal.innerHTML = hexadecimalConversion(numbers);
}

function errorNumber(x, y){
    console.log("Ups its not a binary number");
    x.style.color = "red";
    y.innerHTML = "Ups, It's not a Binary number. Please try a different one!"
    y.style.color = "red";
}

function restoreErrorNumber(x, y){
    x.style.color = "white";
    y.innerHTML = ""
    y.style.color = "white";
}

//Main function

function convertSystem() {
    if(number_systems.value == "binary"){
        regexp = /^(0o)?[0-1]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 2);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "ternary"){
        regexp = /^(0o)?[0-2]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 3);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "quaternary"){
        regexp = /^(0o)?[0-3]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 4);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "quinary"){
        regexp = /^(0o)?[0-4]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 5);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "senary"){
        regexp = /^(0o)?[0-5]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 6);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "septenary"){
        regexp = /^(0o)?[0-6]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 7);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "octonary"){
        regexp = /^(0o)?[0-7]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 8);
            writeNumbers(finalNumber2)
        } else {
            cerrorNumber(number, error);
        }
    }

    if(number_systems.value == "nonary"){
        regexp = /^(0o)?[0-8]+$/i;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 9);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "decimal"){
        regexp = /^[0-9]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 10);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "undecimal"){
        regexp = /^[0-9aA]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 11);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "duodecimal"){
        regexp = /^[0-9a-bA-B]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 12);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "tridecimal"){
        regexp = /^[0-9a-cA-C]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 13);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "tetradecimal"){
        regexp = /^[0-9a-dA-D]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 14);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "pentadecimal"){
        regexp = /^[0-9a-eA-E]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 15);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }

    if(number_systems.value == "hexadecimal") {
        regexp = /^[0-9a-fA-F]+$/;

        if (regexp.test(number.value)){
            restoreErrorNumber(number, error);
            var finalNumber2 = parseInt(number.value, 16);
            writeNumbers(finalNumber2)
        } else {
            errorNumber(number, error);
        }
    }
}
