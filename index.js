function addToDisplay(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculate() {
  var expression = document.getElementById("display").value;
  var result = evaluateExpression(expression);
  document.getElementById("display").value = result;
}
function evaluateExpression(expression) {
  var operands = expression.match(/[+\-*/]|\d+(?:\.\d+)?/g);
  var operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };
  var result = parseFloat(operands[0]);
  for (var i = 1; i < operands.length; i += 2) {
    var operator = operators[operands[i]];
    var operand = parseFloat(operands[i + 1]);
    result = operator(result, operand);
  }
  return result;
}
