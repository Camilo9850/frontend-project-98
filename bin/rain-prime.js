// bin/brain-prime.js

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para verificar si un número es primo
function isPrime(num) {
  // Optimización: solo se necesitan comprobar divisores hasta la raíz cuadrada
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// Función para iniciar el juego
function playGame() {
  rl.question('¡Bienvenido a Brain Games! ¿Cuál es tu nombre? ', (name) => {
    console.log(`¡Hola, ${name}!`);
    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

    // Función recursiva para generar preguntas
    const generateQuestion = () => {
      const number = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
      rl.question(`Pregunta: ${number}\nTu respuesta: `, (answer) => {
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        if (answer.toLowerCase() === correctAnswer) {
          console.log('¡Correcto!');
        } else {
          console.log('Incorrecto.');
        }
        generateQuestion(); // Continuar con la siguiente pregunta
      });
    };

    generateQuestion();
  });
}

playGame();