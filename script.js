//Function to handle the display field
function display(value) {
    document.getElementById("output").value += value;
}

//Function to handle the calculations (+-*/)
function calculate() {
    let expression = document.getElementById("output").value;
    let result;
    try {
        result = eval(expression);

        result = roundTo4Decimals(result)
    } catch (error) {
        result = "Error, Refresh and enter the right inputs"; //Error that will show if the wrong input (e.g text) is entered
    }
    document.getElementById("output").value = result;
}

//Function for rounding the result into four decimal places.
function roundTo4Decimals(number) {
    return Math.round(number * 1e4) / 1e4;
}
