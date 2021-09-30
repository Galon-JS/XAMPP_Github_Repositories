// varijable za operacije
var broj1 = null;
var broj2 = null;
var operacija = null;
var rezultat = null;
// pomocne varijable
var tacka = false;
var jednako = false;
// pomocna funkcija koja sredjuje tacku
function srediTacku(w) {
    if (w.endsWith('.')) {
        w = w.slice(0, -1);
    }
    return w;
}
function handleButtonClick(znak) {
    // varijable screen elemenata
    var currentScreen = document.querySelector('.current-screen');
    var operationScreen = document.querySelector('.operation-screen');
    var preScreen = document.querySelector('.preview-screen');
    // ispitujemo da li je znak operacija
    if (znak === '+' || znak === '-' || znak === '*' || znak === '/') {
        if (currentScreen.innerHTML !== '') {
            broj1 = srediTacku(currentScreen.innerHTML);
            operationScreen.innerHTML = znak;
            preScreen.innerHTML = broj1;
            currentScreen.innerHTML = '';
            operacija = znak;
            tacka = false;
        }       
    } else if(znak === 'C') {
        // resetujemo sve ekrane i varijable
        operationScreen.innerHTML = '';
        preScreen.innerHTML = '';
        currentScreen.innerHTML = '';
        broj1 = null;    
        broj2 = null;
        operacija = null;
        rezultat = null;
        tacka = false;
        jednako = false;
    } else if(znak === '=') {
            // jednako dozovljavamo samo ukoliko je prvi put pritisnuto   
            if (jednako === false) {
                broj2 = currentScreen.innerHTML;
                currentScreen.innerHTML = srediTacku(broj2);
                preScreen.innerHTML = preScreen.innerHTML + operationScreen.innerHTML + currentScreen.innerHTML;
                operationScreen.innerHTML = '=';
                // Matematika
                if(operacija === '*') {
                    rezultat = broj1 * broj2;
                } else if(operacija === '+') {                    
                    rezultat = parseFloat(broj1) + parseFloat(broj2);
                } else if(operacija === '-') {
                    rezultat = broj1 - broj2;
                } else if(operacija === '/') {
                    rezultat = broj1 / broj2;
                }
            }
            currentScreen.innerHTML = rezultat;           
                        // if (currentScreen.innerHTML === rezultat) {
                        //     currentScreen.innerHTML = rezultat + znak;
                        // }
            // jednako oznacavamo da je pritisnuto
            jednako = true;
            // resetujemo tacku 
            tacka = false;
    } 
      else { // ako znak nije operacija 
        // upisivanje brojeva i tacke dozvoljavamo samo ako nije nikad pritisnuto jednako
        if (jednako === false) {
            // ako je znak tacka pravimo neke provere
            if (znak === '.') {                
                // tacku dodajemo samo ako je prva tj ako nikad nije pritisnuta
                if (tacka === false) {  // if (!tacka) {
                    currentScreen.innerHTML = currentScreen.innerHTML + znak;
                }
                // oznacavamo da je tacka pritisnuta
                tacka = true;
            } else { // ako znak nije tacka
                currentScreen.innerHTML = currentScreen.innerHTML + znak;                
            }    
            if (currentScreen.innerHTML === '.') {
                currentScreen.innerHTML = '0.';
            } else if (currentScreen.innerHTML === '00') {
                currentScreen.innerHTML = '0';
            } else if (currentScreen.innerHTML.startsWith('0') && currentScreen.innerHTML.length > 1 && currentScreen.innerHTML !== '0.') {
                currentScreen.innerHTML =currentScreen.innerHTML.slice(1);
            }   
            //Provera znanja od juce 
        }
    }
}