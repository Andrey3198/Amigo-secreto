// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo()
{
    const input = document.getElementById("amigo");
    if (input.value == ""){
        alert("Debe ingresar un nombre");
        return;
    }
    const lista = document.getElementById("listaAmigos");
    if (lista.children.length < 5) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = input.value;        
        lista.appendChild(nuevoAmigo);
        input.value = "";
    }
    else {
        alert("Ya se ingresaron los 5 amigos");
    }
}

function posicionesAleatorias()
{
    // Crear un array con 5 posiciones
    let array = [0, 1, 2, 3, 4];

    // Función para mezclar el array (algoritmo de Fisher-Yates)
    function mezclarArray(arr) {
        for (let i = 4; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
        }
        return arr;
    }

    // Función para verificar que ningún número coincida con su posición
    function esValido(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === i) {
                return false; // Si coincide, no es válido
            }
        }
        return true; // Si no coincide, es válido
    }

    // Mezclar el array hasta que sea válido
    let arrayMezclado;
    do {
        arrayMezclado = mezclarArray([...array]); // Mezclar una copia del array
    } while (!esValido(arrayMezclado));

    return arrayMezclado;
}

function sortearAmigo()
{
    const lista = document.getElementById("listaAmigos");
    if (lista.children.length < 5) {
        alert("Debe completar 5 amigos");
    } else {
        let mezcla = posicionesAleatorias();
        const salida = document.getElementById("resultado");
        for (let i = 0; i < 5; i++){
            const pareja = document.createElement("li");
            pareja.textContent = lista.children[i].textContent + " regala a " + lista.children[mezcla[i]].textContent     
            salida.appendChild(pareja);
        }
    }
}