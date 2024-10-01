#!/usr/bin/env node

// brain-even.js

import readlineSync from 'readline-sync';
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
  return number % 2 === 0;
}

function playGame() {
  const userName = readlineSync.question('¡Bienvenido a Brain Games!\n¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\nResponde "yes" si el número es par, de lo contrario responde "no".`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = getRandomNumber(1, 100);
    const userAnswer = readlineSync.question(`Pregunta: ${randomNumber}\nTu respuesta: `);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.\n¡Intentémoslo de nuevo, ${userName}!`);
      break;
    } else {
      console.log('¡Correcto!');
      correctAnswers++;
    }
  }

  if (correctAnswers === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}

playGame();