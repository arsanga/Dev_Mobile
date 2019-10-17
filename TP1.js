console.log('*****Application opérateurs*******');

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}


start();

async function start() {
    let number1BP = await ask('Premier nombre...? ');
    let number2BP = await ask('Dexieme nombre ....? ');
    let number1 = parseInt(number1BP.toString());
    let number2 = parseInt(number2BP.toString());
    let somme = number1 + number2;
    let substract  = number1 - number2;
    let mult = number1 * number2;
    let division = number1 / number2;

    console.log('La somme est ;', somme);
    console.log('La soustraction est ;', substract);
    console.log('La somme multiplication est : ;', mult);
    console.log('La division est ;', division);
    process.exit();
}
