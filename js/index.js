// TODO LO REFERENTE A LA VACUNACION




// TODO LO REFERENTE A LA ACCESIBILIDAD

/*SI LE DAS AL BOTON AJUSTAR FUENTE, */

document.querySelector("#aumentar").addEventListener("click", ()=>{
    ajustarFuente(1);
})

document.querySelector("#reducir").addEventListener("click", ()=>{
    ajustarFuente(-1);
})

document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);

document.querySelector("#altoContraste").addEventListener("click", altoContraste);

document.querySelector("#restablecer").addEventListener("click", restablecerTodo);

function ajustarFuente(cambio){
    let elementos=document.querySelectorAll("body *:not(.accesibilidad *)"); //Selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo=window.getComputedStyle(elem); //toma el estilo de cada elemento
        let fontSize=parseFloat(estilo.fontSize);
        elem.style.fontSize=fontSize + cambio + 'px';
    })
}

function escalaGrises(){
    document.body.style.filter="grayscale(100%)";
}

function altoContraste(){
    document.body.style.backgroundColor="#1c1f22";
    let elementos=document.querySelectorAll("body *"); //selecciona todos los elementos del body
    elementos.forEach(function(elem){
        let estilo=window.getComputedStyle(elem);
        elem.style.color="#ffd700";
    })
}

function restablecerTodo(){
    let elementos=document.querySelectorAll("body *");
    elementos.forEach(function(elem){
        elem.style.fontSize="";
        elem.style.color="";
    })
    document.body.style.backgroundColor="";
    document.body.style.filter="";
}

function mostrarOcultar(){
    let barra=document.querySelector(".accesibilidad");
    barra.classList.toggle("mostrar"); //Intercambia las clases, si la tiene, la quita, sino, la coloca
}





window.onload = () => {
let mapa = new Map([
    ["Prenatal", "Difteria, Tétanos, Tosferina"],
    ["2 meses", "Poliomielitis, Diferia, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo"],
    ["4 meses", "Poliomielitis, Diferia, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo C, Meningococo B, Neumococo"],
    ["11 meses", "Poliomielitis, Diferia, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo"],
    ["12 meses", "Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B"],
    ["15 meses", "Varicela"],
    ["4 años", "Sarampión, Rubeola, Parotiditis, Varicela"],
    ["6 años", "Difteria, Tétanos, Tosferina, Poliomiellitis"],
    ["12 años", "Varicela, Meningococo ACWY, Papilomavirus"],
    ["14 años", "Difteria, Tétanos"],
    ["65 años", "Difteria, Tétanos, Herpes Zóster, Neumococo"],
    ["80 años", "Herpes Zóster"],
]);

let select=document.querySelector("#edad");
for (let [vacuna, edad] of mapa) {
    let vacunaOp = document.createElement("option");
    vacunaOp.textContent=vacuna;
    vacunaOp.setAttribute("id", vacuna); //poner un id
    vacunaOp.value = vacuna; // añadir valor a cada opción
    select.appendChild(vacunaOp); //para crear opciones
}

document.querySelector("#mostrar-vacuna").addEventListener("click", () => {
    let anios = select.value; // obtener el valor seleccionado
    let vacunaS = mapa.get(select.value);//indice valor
    document.querySelector("#vacuna").textContent = `La/s vacuna/s para ${anios} son ${vacunaS}`;
});
}