buttons = document.querySelector(".buttons")
display = document.querySelector(".display")

buttons.addEventListener("click", function(e) {
    if (e.target.classList.contains('num')) {
        displayFunction(e);
        return;
    } 

    if (e.target.textContent == "AC") {
        display.textContent = "";
    }
    if (e.target.textContent == "C") {
        display.textContent = display.textContent.slice(0, -1);
    }

}
)
console.log("hey")

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