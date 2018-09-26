let numbs = [];

function insert() {
    let inputEl = document.querySelector("input")
    let inputVal = parseInt(inputEl.value);
    if (!inputVal) return;
    numbs.push(inputVal);
    let numbersEl = document.querySelector("#numbers");
    numbersEl.innerHTML += "<span class='btn btn-dark'>" + inputVal + "</span>";

    inputEl.value = '';
}

function printResult(msg) {
    let resEl = document.querySelector("#result span");
    resEl.innerHTML = msg;
}

function calcSum() {
    if (numbs && numbs.length) {
        let sum = 0;
        for ( let i = 0 ; i < numbs.length ; i++) {
            sum += numbs[i];
        }
        printResult(sum);
    } else {
        printResult("--");
    }
}

function calcAvg() {
    if (numbs && numbs.length) {
        let sum = 0;
        for ( let i = 0 ; i < numbs.length ; i++) {
            sum += numbs[i];
        }
        printResult(sum / numbs.length);
    } else {
        printResult("--");
    }
}

function calcProd() {
    if (numbs && numbs.length) {
        let prod = 1;
        for ( let i = 0 ; i < numbs.length ; i++) {
            prod *= numbs[i];
        }
        printResult(prod);
    } else {
        printResult("--");
    }
}

function clearAll() {
    numbs = [];
    let numbersEl = document.querySelector("#numbers");
    numbersEl.innerHTML = "";    
}