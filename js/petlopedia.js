function cerrarSesion() {
    document.getElementById('boton').textContent = "Cerrar Sesión";
}

function borrarBoton() {
    document.getElementById('btn').remove();
}

let contadorCat = 22;
function likeCat() {
    contadorCat ++;
    document.getElementById('like-cat').textContent = `${contadorCat} me gusta`;
    alert("Gato Atigrado was liked");
}

let contadorDog = 45;
function likeDog() {
    contadorDog ++;
    document.getElementById('like-dog').textContent = `${contadorDog} me gusta`;
    alert("Golden Retriever was liked");
}

