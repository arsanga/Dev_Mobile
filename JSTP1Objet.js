const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);
function affiherPizzaTexte(){
    console.log('1. Lister les pizzas ');
    console.log('2. Ajouter une nouvelle pizza ');
    console.log('3. Mettre à jour une pizza ');
    console.log('4. Supprimer une pizza ');
    console.log('99. Sortir');
}
affiherPizzaTexte();
function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}


start();

function Choisir(number1Choix){
    if (parseInt(number1Choix) === 1){
        console.log('Liste des Pizzas');
        affiherPizzaTexte();
    } else if (parseInt(number1Choix) === 2){
        console.log('Ajouter une pizza');
        affiherPizzaTexte();
    } else if (parseInt(number1Choix) === 3){
        console.log('Mettre à jour une Pizza');
        affiherPizzaTexte();
    } else if (parseInt(number1Choix) === 4){
        console.log('Supprimer une Pizza');
        affiherPizzaTexte();
    } else {
        console.log('Au revoir :)')
    }
}

async function start() {
    let number1Choix = 0;

    while (number1Choix != 99){

       number1Choix = await ask('Faites un choix...? ');
       Choisir(number1Choix);

   }
    if (parseInt(number1Choix) === 99){
        process.exit();
        console.log('vous avez choisi ', number1Choix, 'Bye!!')
    }

}

