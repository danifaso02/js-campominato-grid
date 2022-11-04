"use: strict";

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const playButton = document.querySelector(".play-btn");
const gameTable = document.querySelector(".game-table");

const gameMode = document.getElementById("game-mode");

playButton.addEventListener("click", function(){

    if(gameMode.value === "easy"){

        gameTable.innerHTML = ""; 
        for (let i = 1; i <= 100; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("easy");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }
    
    else if(gameMode.value === "medium"){

        gameTable.innerHTML = "";
        for (let i = 1; i <= 81; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("medium");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }
    
    else if(gameMode.value === "hard"){

        gameTable.innerHTML = ""; 
        for (let i = 1; i <= 49; i++) {
        
            const gameCell = document.createElement("div");
            gameCell.innerHTML = i;
            gameCell.classList.add("game-number");
    
            gameCell.classList.add("hard");
            
            gameCell.addEventListener("click", function(){
    
                gameCell.classList.add("clicked");
                console.log(i);
    
            });
    
            gameTable.append(gameCell);
    
        }

    }

});