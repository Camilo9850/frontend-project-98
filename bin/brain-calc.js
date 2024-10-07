const readlineSync = require('readline-sync');
const math = require('mathjs');

const roundsCount = 3;

const playGame = () => {
  const userName = readlineSync.question('¡Bienvenido a Brain Games!\n¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\nResuelve las operaciones matemáticas.`);

  for (let i = 0; i < roundsCount; i++) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = math.evaluate(question);

    const userAnswer = parseInt(readlineSync.question(`Pregunta: ${question}\nTu respuesta: `));

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`¡Incorrecto! La respuesta correcta era ${correctAnswer}.`);
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

playGame();