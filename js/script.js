/* 
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 
*/

// SELEZIONO ELEMENTI UTILI IN HTML & VARIABILI PREIMPOSTATE
const bottone = document.getElementById("btn");
const container = document.getElementById("general-container");

// FUNZIONE CREA ELEMENTO
function creaElemento(tag, classe){
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    return elemento;
};

// AL CLICK SUL BOTTONE INSERISCO ELEMENTO SQUARE ALLINTERNO DEL CONTAINER
bottone.addEventListener("click", 
    function(){
        // CREO CICLO FOR
        for (let i = 1; i <= 100; i++){
            // CREO ELEMENTO DIV CON LA FUNZIONE E ASSEGNO LA CLASSE SQUARE
            const quadrato = creaElemento("div", "square");
            // INSERICO DENTRO AL DIV IL NUMERO DEL CICLO
            quadrato.append(i);
            container.append(quadrato);
            // AL CLICK SULL'ELEMENTO SQUARE
            quadrato.addEventListener("click",
                function(){
                    // AGGIUNGO ALL'ELEMENTO CLICCATO LA CLASSE
                    quadrato.classList.add("bg-blu");
                    // OUTPUT IN CONSOLE DEL NUMERO CLICCATO
                    console.log("Hai selezionato la cella " + i);  
                }
            )   
        }
    }
);


    

    



        