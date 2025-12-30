const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    // AC
    if (value === "AC") {
      expression = "";
      result.value = "";
    }

    // DELETE (1st line wala ×)
    else if (value === "×" && button.classList.contains("tain")) {
      expression = expression.slice(0, -1);
      result.value = expression;
    }

    // =
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

    // +/-
    else if (value === "+/-") {
      if (expression) {
        expression = String(-Number(expression));
        result.value = expression;
      }
    }

    // Normal buttons
    else {
      expression += value;
      result.value = expression;
    }
  });
});