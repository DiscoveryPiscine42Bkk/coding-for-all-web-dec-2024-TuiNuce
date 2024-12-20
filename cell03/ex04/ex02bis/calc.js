$(document).ready(function () {
    $("#calculate").on("click", function () {
        const leftOperand = parseFloat($("#leftOperand").val());
        const operator = $("#operator").val();
        const rightOperand = parseFloat($("#rightOperand").val());

        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert("Error :(");
            return;
        }

        if ((operator === "/" || operator === "%") && rightOperand === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = leftOperand + rightOperand;
                break;
            case "-":
                result = leftOperand - rightOperand;
                break;
            case "*":
                result = leftOperand * rightOperand;
                break;
            case "/":
                result = leftOperand / rightOperand;
                break;
            case "%":
                result = leftOperand % rightOperand;
                break;
        }

        alert(`Result: ${result}`);
        console.log(`Result: ${result}`);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});