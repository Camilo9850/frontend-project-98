import readlineSync from 'readline-sync'; // Import the module

// ... rest of your code using readlineSync

const players = {}; // Objeto para almacenar las estadísticas de los jugadores

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gcd = (a, b) => {
  // Algoritmo de Euclides
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

const game = () => {
  console.log('¡Bienvenido a Brain Games!');
const userName = readlineSync.question('¿Cuál es tu nombre? ');

  console.log(`¡Hola, ${userName}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  let isCorrect = true;
  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = gcd(num1, num2);

    const userAnswer = readlineSync.question(`Pregunta: ${num1} ${num2}\nTu respuesta: `);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
        console.log(`¡Intentémoslo de nuevo, ${userName}!`); // Asegúrate de que userName esté definido aquí
      isCorrect = false;
      break;
    } else {
      console.log('¡Correcto!');
    }
  }

  if (isCorrect) {
    console.log(`¡Felicidades, ${userName}!`);
    // Actualizamos las estadísticas del jugador
    if (!players[userName]) {
      players[userName] = {
        wins: 1,
        totalGames: 1
      };
    } else {
      players[userName].wins++;
      players[userName].totalGames++;
    }

    // Calculamos el porcentaje de aciertos
    const winPercentage = (players[userName].wins / players[userName].totalGames) * 100;
    console.log(`Tu porcentaje de aciertos es: ${winPercentage}%`);
  }

  // Mostramos las estadísticas de todos los jugadores al final del juego
  console.log("Estadísticas de todos los jugadores:");
  for (const player in players) {
    console.log(`${player}: ${players[player].wins} victorias de ${players[player].totalGames} juegos (${Math.round((players[player].wins / players[player].totalGames) * 100)}%)`);
  }
};

game();