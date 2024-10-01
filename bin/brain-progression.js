#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Obtiene un número aleatorio entre min y max
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Genera una progresión aritmética de longitud especificada
const generateProgression = (length) => {
    const firstNumber = getRandomNumber(1, 10); // Obtiene el primer número de la progresión
    const difference = getRandomNumber(1, 5); // Obtiene la diferencia común
    const progression = []; // Crea un arreglo para almacenar la progresión
    for (let i = 0; i < length; i++) {
        progression.push(firstNumber + i * difference); // Agrega el siguiente número a la progresión
    }
    return progression;
};

// Oculta un número aleatorio en la progresión
const hideNumber = (progression) => {
    const hiddenIndex = getRandomNumber(0, progression.length - 1); // Selecciona un índice aleatorio
    const hiddenNumber = progression[hiddenIndex]; // Obtiene el número oculto
    progression[hiddenIndex] = '..'; // Reemplaza el número oculto por '..'
    return { progression, hiddenNumber }; // Devuelve la progresión modificada y el número oculto
};

// Función principal del juego
const game = () => {
    console.log('¡Bienvenido a Brain Games!');
    const userName = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${userName}!`);
    console.log('¿Qué número falta en la progresión?');

    let isCorrect = true; // Variable para indicar si el usuario ha respondido correctamente

    for (let i = 0; i < 3; i++) {
        const length = getRandomNumber(5, 10); // Genera una longitud aleatoria para la progresión
        const { progression, hiddenNumber } = hideNumber(generateProgression(length)); // Oculta un número en la progresión
        const userAnswer = readlineSync.question(`Pregunta: ${progression.join(' ')} \nTu respuesta: `); // Pide al usuario que ingrese su respuesta

        if (Number(userAnswer) !== hiddenNumber) { // Comprueba si la respuesta es correcta
            console.log(
                `${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era ${hiddenNumber}.`,
            );
            isCorrect = false; // Si la respuesta es incorrecta, cambia isCorrect a false
            break; // Sale del bucle
        } else {
            console.log('¡Correcto!'); // Si la respuesta es correcta, muestra un mensaje de éxito
        }
    }

    if (isCorrect) {
        console.log(`¡Felicidades, ${userName}!`); // Si el usuario ha respondido correctamente a todas las preguntas, muestra un mensaje de felicitación
    }
};

game();