export const DisplayMap = { Start: "start", Game: "game", End: "end" };

// export function generateNumber(max) {
//     return Math.floor(Math.random() * max)
//   }
const generateNumber = (max) => Math.floor(Math.random() * max);

const getResult = (val1, val2, operator) => {
  switch (operator) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "/":
      return val1 / val2;
    case "x":
      return val1 * val2;
  }
};

export const operators = ["+", "x", "-", "/"];

export const sign = {
  signs: operators[generateNumber(operators.length)],
};

export function generateProblem() {
  const val1 = generateNumber(20);
  const val2 = generateNumber(20);
  const operator = operators[generateNumber(operators.length)];

  const correctAnswer = getResult(val1, val2, operator);
  const question = `${val1} ${operator} ${val2}`;

  return {
    correctAnswer,
    question,
  };
}
