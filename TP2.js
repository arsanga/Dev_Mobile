tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let max;
let min;

function printDesElement(){
    console.log('Tableau dans l ordre est :');
    for(let num = 0; num <= tab1.length-1; num++ ){
        console.log(tab1[num]);
    }
}


function printDuTableuaInverseDesElements() {
    console.log('Tableau inverse est :');

    for (let num = tab1.length - 1; num >= 0; num--) {
        console.log(tab1[num]);
    }
}

function printDesElementSuperieurATrois() {
    console.log('Tableau des nombres superieur à 3:');

    for (let num = tab1.length - 1; num >= 0; num--) {
        if (tab1[num] > 3) {
            console.log(tab1[num]);
        }
    }
}

function printDesElementPairs() {
    console.log('Tableau des nombres pairs est');

    for (let num = tab1.length - 1; num >= 0; num--) {
        if (tab1[num] % 2 == 0) {
            console.log(tab1[num]);
        }
    }
}
function printDuPlusGrantElement() {
    console.log('Le plus grand element est :');
    max = 0;
    for (let num = tab1.length - 1; num >= 0; num--) {

        if (tab1[num] > max) {
            max = tab1[num];
        }
    }

    console.log(max);
}

    function printDuPlusPetitElement() {
        console.log('Le plus petit element est :');

        min = max ;
        for (let num = tab1.length - 1; num >= 0; num--) {

            if (tab1[num] < min) {
                min = tab1[num];
            }
        }
        console.log(min);
    }

printDesElement();
    printDuTableuaInverseDesElements();
    printDesElementSuperieurATrois();
    printDesElementPairs();
    printDuPlusGrantElement();
    printDuPlusPetitElement();


function printMoyenne() {
    console.log('La moyenne est :');

   let moy = max / tab1.length;
    console.log(moy);
}

function indexDeQuinz() {
    console.log('Index de 15 est:');

    for (let num = tab1.length - 1; num >= 0; num--) {
        if (tab1[num] === 15) {
            console.log(num);
        }
    }
}

function nombreDeDoublons() {
    console.log('Le nombre de doublon est:');
 let tabDoublon = [];
 let temp = [];

    for (let num = 0; num <= tab1.length-1; num++) {
        let k=0;
        for (let num2 = 1; num2 <= tab1.length-2; num2++) {
            if (tab1[num] === tab1[num2]) {
               temp[k] = tab1[num];
               k++;
                let j = 1;
                for(let i = 0; i<temp.length;i++){
                    if (temp[i] !== tab1[num] && temp[i] !== tab1[num2]){
                        tabDoublon[j] = temp[i];
                        j++;
                    }

                }
            }

        }
      //  num2 = num;
      // temp = [];
    }

        console.log(tabDoublon.length);

}

printMoyenne();
indexDeQuinz();
nombreDeDoublons();
