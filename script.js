buttons = document.querySelector(".buttons")
display = document.querySelector(".display")
let showResult = false;

buttons.addEventListener("click", function(e) {
    if (showResult) {
        display.textContent = '';
        showResult = false;
        
    }
    if (e.target.classList.contains('num')) {
        displayFunction(e);
        return;
    } 

    if (e.target.textContent == "AC") {
        display.textContent = "";
        return;
    }
    if (e.target.textContent == "C") {
        display.textContent = display.textContent.slice(0, -1);
        return;
    }

    if (!includesOperator(display.textContent)) {
        displayFunction(e);
        return;
    }

    let [a, operator, b] = display.textContent.split(/(\D)/);
    if (a == '' || b == '' || operator == '') {
        showResult = true;
        display.textContent = "Error";
        return;
    }
    a = Number(a);
    b = Number(b);

    let addSign = true;
    if (e.target.textContent == "=") {
        addSign = false;
        showResult = true;
    }
    switch (operator) {
        case "+":
            display.textContent = add(a,b);
            break;
        case "-":
            display.textContent = minus(a,b)
            break;
        
        case "/":
            display.textContent = divide(a,b);
            break;
        case "*":
            display.textContent = multiply(a,b);
            break;
        case "=":
            
    }
    if (addSign) {
        display.textContent += e.target.textContent;
    }

}
)
console.log("hey")

function includesOperator(string) {
    return string.includes("+") || string.includes("-") || string.includes("/") || string.includes("*");
}

function displayFunction(event) {
    console.log("hey");

    display.textContent += event.target.textContent;
}

function add(a,b) {
    return a+b;
}

function minus(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,operator,b) {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return minus(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}