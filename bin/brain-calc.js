// src/index.js
import readlineSync from 'readline-sync';

const roundsCount = 3;

export const playGame = (gameRules) => {
  const userName = readlineSync.question('¡Bienvenido a Brain Games!\n¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\n${gameRules.task}`);

  for (let i = 0; i < roundsCount; i++) {
    const { question, correctAnswer } = gameRules.generateRoundData();
    const userAnswer = parseInt(readlineSync.question(`Pregunta: ${question}\nTu respuesta: `), 10); // Asegurarse de que la respuesta sea un número entero

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`¡Incorrecto! La respuesta correcta era ${correctAnswer}.`);
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

// bin/brain-calc.js


const gameRules = {
  task: 'Resuelve las operaciones matemáticas.',
  generateRoundData: () => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = eval(question); // ¡Cuidado con eval!
    return { question, correctAnswer };
  },
};

playGame(gameRules);