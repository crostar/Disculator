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
    console.log(res);
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

function calculatePdfUniform() {
    const distItem = document.getElementById("uniform");
    const inputNums = extractInputs(distItem);
    const a = inputNums[0];
    const b = inputNums[1];
    const result = 1 / (b - a + 1);
    inputNums[inputNums.length - 1].value = String(result);
}

function calculatePdfHyperGeometric() {
    const distItem = document.getElementById("hyperGeometric");
    const inputNums = extractInputs(distItem);
    const N = inputNums[0];
    const r = inputNums[1];
    const n = inputNums[2];
    const x = inputNums[3];
    const result = choose(r, x) * choose(N - r, n - x) / choose(N, n);
    inputNums[inputNums.length - 1].value = String(result);
}

function calculatePdfBinomial() {
    const distItem = document.getElementById("binomial");
    const inputNums = extractInputs(distItem);
    const n = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(n, x) * (p ** x) * ((1 - p) ** (n - x));
    inputNums[inputNums.length - 1].value = String(result);
}

function calculatePdfNegativeBinomial() {
    const distItem = document.getElementById("negativeBinomial");
    const inputNums = extractInputs(distItem);
    const k = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(k + x - 1, k - 1) * (p ** k) * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = String(result);
}


function calculatePdfGeometric() {
    const distItem = document.getElementById("geometric");
    const inputNums = extractInputs(distItem);
    const p = inputNums[0];
    const x = inputNums[1];
    const result = p * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = String(result);
}

function calculateCdfUniform() {
    const distItem = document.getElementById("uniform");
    const inputNums = extractInputs(distItem);
    const a = inputNums[0];
    const b = inputNums[1];
    const x = inputNums[2];
    const result = (x - a + 1) / (b - a + 1);
    inputNums[inputNums.length - 1].value = String(result);
}

function calculateCdfHyperGeometric() {
    const distItem = document.getElementById("hyperGeometric");
    const inputNums = extractInputs(distItem);
    const N = inputNums[0];
    const r = inputNums[1];
    const n = inputNums[2];
    const x = inputNums[3];
    const result = choose(r, x) * choose(N - r, n - x) / choose(N, n);
    inputNums[inputNums.length - 1].value = "To complicated! Beyond our scope.";
}

function calculateCdfBinomial() {
    const distItem = document.getElementById("binomial");
    const inputNums = extractInputs(distItem);
    const n = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(n, x) * (p ** x) * ((1 - p) ** (n - x));
    inputNums[inputNums.length - 1].value = "To complicated! Beyond our scope.";
}

function calculateCdfNegativeBinomial() {
    const distItem = document.getElementById("negativeBinomial");
    const inputNums = extractInputs(distItem);
    const k = inputNums[0];
    const p = inputNums[1];
    const x = inputNums[2];
    const result = choose(k + x - 1, k - 1) * (p ** k) * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = "To complicated! Beyond our scope.";
}


function calculateCdfGeometric() {
    const distItem = document.getElementById("geometric");
    const inputNums = extractInputs(distItem);
    const p = inputNums[0];
    const x = inputNums[1];
    const result = p * ((1 - p) ** x);
    inputNums[inputNums.length - 1].value = "To complicated! Beyond our scope.";
}


function calculatePdf(i) {
    switch (i) {
        case 0:
            return calculatePdfUniform;
            break;
        case 1:
            return calculatePdfBinomial;
            break;
        case 2:
            return calculatePdfHyperGeometric;
            break;
        case 3:
            return calculatePdfNegativeBinomial;
            break;
        case 4:
            return calculatePdfGeometric;
            break;
        default:
            return null;
    }
}

function calculateCdf(i) {
    switch (i) {
        case 0:
            return calculateCdfUniform;
            break;
        case 1:
            return calculateCdfBinomial;
            break;
        case 2:
            return calculateCdfHyperGeometric;
            break;
        case 3:
            return calculateCdfNegativeBinomial;
            break;
        case 4:
            return calculateCdfGeometric;
            break;
        default:
            return null;
    }
}

/* This will be fully implemented in Version 2 */
function renderPage() {
    const inputBoxes = document.getElementsByClassName("input-group");
    for (let item of inputBoxes) {
        item.className += " input-group-lg"
    }
}

function main() {
    renderPage();
    const pdfbtn = document.getElementsByClassName("pdfBtn");
    for (let i = 0; i < pdfbtn.length; i++) {
        console.log(i);
        pdfbtn[i].addEventListener("click", calculatePdf(i));
    }
    const cdfbtn = document.getElementsByClassName("cdfBtn");
    for (let i = 0; i < cdfbtn.length; i++) {
        console.log(i);
        cdfbtn[i].addEventListener("click", calculateCdf(i));
    }
}


main();