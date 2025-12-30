const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      expression = "";
      result.value = "";
    }

    else if (value === "=") {
      try {
        expression = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/");
        result.value = eval(expression);
        expression = result.value;
      } catch {
        result.value = "Error";
        expression = "";
      }
    }

    else if (value === "+/-") {
      if (expression) {
        expression = String(-Number(expression));
        result.value = expression;
      }
    }

    else {
      expression += value;
      result.value = expression;
    }
  });
});