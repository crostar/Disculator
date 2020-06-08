function resBox() {
    const resultBox = document.createElement("div");
    resultBox.className = "input-group";

    const prepend = document.createElement("div");
    prepend.className = "input-group-prepend";
    const prependText = document.createElement("span");
    prependText.className = "input-group-text";
    prependText.innerHTML = "result";
    prepend.appendChild(prependText);

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.className = "form-control";

    resultBox.appendChild(prepend);
    resultBox.appendChild(inputBox);
    return resultBox;
}
function Buttons() {
    const btnGroup1 = document.createElement("div");
    const btnGroup2 = document.createElement("div");
    btnGroup1.className = "btnGroup";
    btnGroup2.className = "btnGroup";
    const pdfbtn = document.createElement("button");
    const cdfbtn = document.createElement("button");
    const clearbtn = document.createElement("button");
    pdfbtn.className = "pdfBtn btn btn-outline-secondary";
    cdfbtn.className = "cdfBtn btn btn-outline-secondary";
    clearbtn.className = "clearBtn btn btn-outline-secondary";
    pdfbtn.type = "button";
    cdfbtn.type = "button";
    clearbtn.type = "button";
    pdfbtn.innerHTML = "PDF: P(X = x)";
    cdfbtn.innerHTML = "CDF: P(X <= x)";
    clearbtn.innerHTML = "Clear";
    btnGroup1.appendChild(pdfbtn);
    btnGroup1.appendChild(cdfbtn);
    btnGroup2.appendChild(clearbtn);
    return [btnGroup1, btnGroup2];
}



/* This will be fully implemented in Version 2 */
function renderPage() {
    const calItems = document.getElementsByClassName("calItem");

    for (let item of calItems) {
        const buttons = Buttons();
        item.appendChild(buttons[0]);
        item.appendChild(resBox());
        item.appendChild(buttons[1]);
    }

    const inputBoxes = document.getElementsByClassName("input-group");
    for (let item of inputBoxes) {
        item.className += " input-group-lg"
    }

}


function main() {
    renderPage();
}

main();