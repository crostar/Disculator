function parseInputs(inputs) {
    let res = [];
    for (let i = 0; i < inputs.length - 1; i++) {
        let resNum = null;
        const inputStr = inputs[i].value;
        const fraction = /^[-+]?[0-9]+\/[0-9]+$/;
        if (inputStr.match(fraction)) {
            const split = inputStr.split("/");
            resNum = Number(split[0]) / Number(split[1]);
        } else if (inputStr != "") {
            resNum = Number(inputStr);
        }

        if (isNaN(resNum) || resNum == null) {
            alert("Input not valid or empty!");
            return null;
        } else
            res.push(resNum);
    }
    res.push(inputs[inputs.length - 1]);
    return res;
}

function extractInputs(distItem) {
    const inputs = distItem.querySelectorAll("input");
    console.log(inputs);
    return parseInputs(inputs);
}

function choose(n, k) {
    function factorial(n) {
        let res = 1;
        for (; n > 0; n--) {
            res *= n;
        }
        return res;
    }
    return factorial(n) / (factorial(n - k) * factorial(k));
}

function alertInvalidInput(dist) {
    alert("Invalid inputs! Please see the requirement of " + dist + " Distribution");
}

function calculatePdfUniform() {
    const distItem = document.getElementById("uniform");
    const inputNums = extractInputs(distItem);
    const a = inputNums[0];
    const b = inputNums[1];
    const x = inputNums[2];
    let sane = (a <= x) && (x <= b) && Number.isInteger(b-x) && Number.isInteger(x-a);
    if (sane) {
        const result = 1 / (b - a + 1);
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("Uniform");
    }
}

function calculatePdfHyperGeometric() {
    const distItem = document.getElementById("hyperGeometric");
    const inputNums = extractInputs(distItem);
    const N = inputNums[0];
    const r = inputNums[1];
    const n = inputNums[2];
    const x = inputNums[3];
    let sane = Number.isInteger(N) && Number.isInteger(r) && Number.isInteger(n) && Number.isInteger(x);
    sane = sane && r <= N && n <= N && x <= r && x <= n;
    if (sane) {
        const result = choose(r, x) * choose(N - r, n - x) / choose(N, n);
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("HyperGeometric");
    }
}

function calculatePdfBinomial() {
    const distItem = document.getElementById("binomial");
    const inputNums = extractInputs(distItem);
    const n = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    let sane = p >= 0 && p <= 1 && Number.isInteger(n) && Number.isInteger(x) && x <= n && x >= 0;
    if (sane) {
        const result = choose(n, x) * (p ** x) * ((1 - p) ** (n - x));
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("Binomial");
    }
}

function calculatePdfNegativeBinomial() {
    const distItem = document.getElementById("negativeBinomial");
    const inputNums = extractInputs(distItem);
    const k = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    let sane = p >= 0 && p <= 1 && Number.isInteger(k) && Number.isInteger(x) && k > 0 && x >= 0;
    if (sane) {
        const result = choose(k + x - 1, k - 1) * (p ** k) * ((1 - p) ** x);
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("Negative Binomial");
    }
}


function calculatePdfGeometric() {
    const distItem = document.getElementById("geometric");
    const inputNums = extractInputs(distItem);
    const p = inputNums[0];
    const x = inputNums[1];
    let sane = p >= 0 && p <= 1 && x.isInteger() && k >= 0;
    if (sane) {
        const result = p * ((1 - p) ** x);
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("Geometric");
    }
}

function calculateCdfUniform() {
    const distItem = document.getElementById("uniform");
    const inputNums = extractInputs(distItem);
    const a = inputNums[0];
    const b = inputNums[1];
    const x = inputNums[2];
    let sane = (a <= x) && (x <= b) && Number.isInteger(b-x) && Number.isInteger(x-a);
    if (sane) {
        const result = (x - a + 1) / (b - a + 1);
        inputNums[inputNums.length - 1].value = String(result);
    } else {
        alertInvalidInput("Uniform");
    }
}

function calculateCdfHyperGeometric() {
    const distItem = document.getElementById("hyperGeometric");
    const inputNums = extractInputs(distItem);
    const N = inputNums[0];
    const r = inputNums[1];
    const n = inputNums[2];
    const x = inputNums[3];
    const result = choose(r, x) * choose(N - r, n - x) / choose(N, n);
    inputNums[inputNums.length - 1].value = "To be implemented.";
}

function calculateCdfBinomial() {
    const distItem = document.getElementById("binomial");
    const inputNums = extractInputs(distItem);
    const n = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(n, x) * (p ** x) * ((1 - p) ** (n - x));
    inputNums[inputNums.length - 1].value = "To be implemented.";
}

function calculateCdfNegativeBinomial() {
    const distItem = document.getElementById("negativeBinomial");
    const inputNums = extractInputs(distItem);
    const k = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(k + x - 1, k - 1) * (p ** k) * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = "To be implemented.";
}


function calculateCdfGeometric() {
    const distItem = document.getElementById("geometric");
    const inputNums = extractInputs(distItem);
    const p = inputNums[0];
    const x = inputNums[1];
    const result = p * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = "To be implemented.";
}


function calculatePdf(i) {
    switch (i) {
        case 0:
            return calculatePdfUniform;
        case 1:
            return calculatePdfBinomial;
        case 2:
            return calculatePdfHyperGeometric;
        case 3:
            return calculatePdfNegativeBinomial;
        case 4:
            return calculatePdfGeometric;
        default:
            return null;
    }
}

function calculateCdf(i) {
    switch (i) {
        case 0:
            return calculateCdfUniform;
        case 1:
            return calculateCdfBinomial;
        case 2:
            return calculateCdfHyperGeometric;
        case 3:
            return calculateCdfNegativeBinomial;
        case 4:
            return calculateCdfGeometric;
        default:
            return null;
    }
}

function clearInputBoxes(btn) {
    const inputBoxes = btn.parentNode.parentNode.getElementsByTagName("input");
    for (let item of inputBoxes) {
        item.value = "";
    }
}

function main() {
    const pdfBtns = document.getElementsByClassName("pdfBtn");
    for (let i = 0; i < pdfBtns.length; i++) {
        pdfBtns[i].addEventListener("click", calculatePdf(i));
    }
    const cdfBtns = document.getElementsByClassName("cdfBtn");
    for (let i = 0; i < cdfBtns.length; i++) {
        cdfBtns[i].addEventListener("click", calculateCdf(i));
    }
    const clearBtns = document.getElementsByClassName("clearBtn");
    for (let i = 0; i < clearBtns.length; i++) {
        clearBtns[i].addEventListener("click", function () { clearInputBoxes(clearBtns[i]); });
    }
}


main();