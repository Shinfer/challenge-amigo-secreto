//variables
let listaAmigosTotales = [];
let listaAmigosVisible = "";
let amigoSorteadoVisible = "";
let nuevoAmigo = "";
let amigoSorteado = "";


function actualizaListaAmigos(lista, listaVisible) {//adquiere por ID el elemento y le pasa la lista
    listaVisible = document.getElementById('listaAmigos');
    listaVisible.innerHTML = "";
    let listaAux = "" //variable auxiliar temporal
    for (let i = 0; i < lista.length; i++) {
        listaAux += `<li>${lista[i]}</li>`
    }
    listaVisible.innerHTML = listaAux;
}

function agregarAmigo(){
    if(String(document.getElementById('amigo').value) == "") {
        //si la caja de texto esta vacia, tira un alert
        alert("Por favor, ingrese un nombre valido");
    } else {
        //si esta llena, carga el valor nuevo a la variable
        nuevoAmigo = String(document.getElementById('amigo').value);
        //carga la variable a la lista
        listaAmigosTotales.push(nuevoAmigo);
        actualizaListaAmigos(listaAmigosTotales, listaAmigosVisible);
        //borra el contenido ya cargado, para preparar el textbox para otra carga
        document.getElementById('amigo').value = "";
    }
}

function sortearAmigo(){
    if (listaAmigosTotales.length != 0) {
        //genera el amigo sorteado usando un Math.random
        amigoSorteado = listaAmigosTotales[Math.floor(Math.random()*listaAmigosTotales.length)]
        //adquiere por ID el elemento y le pasa el resultado
        amigoSorteadoVisible = document.getElementById('resultado');
        amigoSorteadoVisible.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        //borra la lista para otra carga de datos y borra la lista visible tambien
        listaAmigosTotales = [];
        listaAmigosVisible.innerHTML = "";
    } else {
        alert(`No hay cargado ningun amigo para hacer el sorteo \n Por favor carga uno antes de realizar el sorteo`)
    }
}



