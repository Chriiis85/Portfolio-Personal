/*BUSCAMINAS*/

const numFilas=5;
const numColumnas=5;
const bombas=10;

const posicionesTablero = [];

function generarTablero(){
    for(let i=0; i<numFilas; i++){
        const columnas = [];
        for(let c=0; c<numColumnas; c++){
            columnas.push(0);
       }
       posicionesTablero.push(columnas);
    }
}

function pintarTablero(){
    let tablero = document.querySelector("#tablero");
    
    for(let i=0; i<numFilas; i++){
        let nuevafila = document.createElement("tr");
        tablero.appendChild(nuevafila);
        for(let c=0; c<numColumnas; c++){
            let nuevaColumna = document.createElement("td");
            if(posicionesTablero[i][c] == 0){
                nuevaColumna.classList.add("vacio");
            }
            if(posicionesTablero[i][c] == 1){
                nuevaColumna.classList.add("bomba");
            }

            nuevafila.appendChild(nuevaColumna);
       }
    }
}

function colocarBombas(){
    bombascolocadas=0;

    do{
        let x = Math.floor(Math.random() * (numFilas-0) + 0);
        let y = Math.floor(Math.random() * (numColumnas-0) + 0);
        if(posicionesTablero[x][y] == 0){
            posicionesTablero[x][y] = 1;
            bombascolocadas++;
        }
    }while (bombascolocadas < bombas);
}

generarTablero();
colocarBombas();
pintarTablero();

let posiciones = document.querySelectorAll("td");

for(let posicion of posiciones){
    posicion.addEventListener("click", function(){
        console.log(posicion);

        if(posicion.className=="vacio"){
            console.log("No hay bomba");
        }
        if(posicion.className=="bomba"){
            console.log("No hay bomba");
            alert("Game Over");
            location.reload();
        }

    });
}

console.log(posicionesTablero);