const mesActualSelect = document.querySelector("#mesActual");
const flechaSigSelect = document.querySelector("#siguiente");
const flechaAntSelect = document.querySelector("#anterior");
const tablaDiasSelect = document.querySelector("#tablaDias");

const DIA_ACTUAL = new Date();
var ano_actual= DIA_ACTUAL.getFullYear();
var mes_actual = DIA_ACTUAL.getMonth();

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

mesActualSelect.textContent=MESES[DIA_ACTUAL.getMonth()]+" de "+ano_actual;

flechaSigSelect.addEventListener("click",function(){
    sumarMes();
    mostrarDias();
});

flechaAntSelect.addEventListener("click",function(){
    restarMes();
    mostrarDias();
});

function sumarMes(){
    if(mes_actual<11){
        mes_actual++;
    }else {
        mes_actual=0;
        ano_actual++;
    }
    mesActualSelect.textContent=MESES[mes_actual]+" de "+ano_actual;
}

function restarMes(){
    if(mes_actual<1){
        mes_actual=11;
        ano_actual--;
    }else {
        mes_actual--;
    }
    mesActualSelect.textContent=MESES[mes_actual]+" de "+ano_actual;
}
mostrarDias();
function mostrarDias(){

    var dateMostrar = new Date(DIA_ACTUAL.getFullYear(),mes_actual,1);
    var diaAnterior = dateMostrar;

    tablaDiasSelect.innerHTML = `
    <tr id="diasSemana">
    <td>L</td>
    <td>M</td>
    <td>X</td>
    <td>J</td>
    <td>V</td>
    <td>S</td>
    <td>D</td>
    </tr>
    `

    for(let i=0; i<7; i++){
        const tr=document.createElement("tr");
        for(let j=0; j<7; j++){
            const td=document.createElement("td");

            if (i === 0 && diaAnterior.getDate() < DIA_ACTUAL.getDate()) {
                td.textContent = diaAnterior.getDate();
                diaAnterior.setDate(diaAnterior.getDate()-1);
                continue;
            }

            if(dateMostrar.getDay() == j && i != 0){
                dateMostrar.setDate(dateMostrar.getDate()+1);
                td.textContent=dateMostrar.getDate();
            }

            if(dateMostrar.getMonth() > mes_actual){
                td.textContent="";
            }

            if(dateMostrar.getDay() == 6 || dateMostrar.getDay() == 0 && i!=0){
                td.classList.add("findeSemana")
            }

            if(dateMostrar.getDate() == DIA_ACTUAL.getDate() && dateMostrar.getMonth()== DIA_ACTUAL.getMonth() && dateMostrar.getFullYear()==DIA_ACTUAL.getFullYear()){
                td.classList.add("diaActual");
            }

            
            tr.appendChild(td);

            
        }
        if (i != 0)tablaDiasSelect.appendChild(tr);
    }
}

