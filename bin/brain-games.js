#!/usr/bin/env node
// brain-games.js
import readlineSync from 'readline-sync';





export const welcomeUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
};
welcomeUser();



// Resto de tu código
console.log('¡Bienvenido a Brain Games!');