$(document).ready(function() {
        let display = $("#display");
        let currentInput = "";
        let previousInput = "";
        let operator = "";

        function calculate(a, b, op) {
            switch (op) {
                case '+': return a + b;
                case '-': return a - b;
                case '/': return a / b;
                case '*': return a * b;
                case '%': return a % b;
                default: return 0;
            }
        }

        $(".calculator-btn").click(function() {
            let buttonValue = $(this).text();

            switch(buttonValue) {
                case 'C':
                    currentInput = "";
                    previousInput = "";
                    operator = "";
                    display.val("");
                    break;
                case 'CE':
                    if (currentInput.length > 0) {
                        currentInput = currentInput.slice(0, -1);
                        display.val(currentInput);
                    }
                    break;

                case '=':
                    if (currentInput !== "" && previousInput !== "") {

                            currentInput = calculate(parseFloat(previousInput) , parseFloat(currentInput) , operator).toString();
                                display.val(currentInput);
                                previousInput = "";
                                operator = "";

                        } 
                        
                        break;
                                case '+':
                                case '-':
                                case '/':
                                case '*':
                                case '%':

                                if (currentInput !== "") {
                                        if (previousInput === "") {
                                previousInput = currentInput;
                                operator = buttonValue;
                        } 
                        else {
                                previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString();
                                operator = buttonValue;
                        }
                                currentInput = "";
                                display.val(operator); // Added to show the operator on display
                    }
                    break;

                default:
                    if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
                        currentInput += buttonValue;
                        display.val(currentInput);
                    }
                    break;
            }
        });
    });