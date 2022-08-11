let root = document.querySelector("#root");

// BASE DE DATOS
let frutas = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];
let frutas2 = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];

// JUNTAR LAS DOS MATRIZES
let todas_las_frutas = frutas.concat(frutas2);

// FUNCION PARA HACER QUE LAS CARTAS ESTE EN UNA POSICION ALEATORIA
todas_las_frutas.sort(function(){return 0.5 - Math.random() });

// FUNCION PARA CREAR LAS CARTAS DE LA MATRIZ
function agregar_datos_al_DOM(){
    todas_las_frutas.forEach(function(elemento,indice){

        let contenedor = document.createElement("div");

        contenedor.innerHTML = 
        '<div class="fruta_back">' +
            '<div class="fruta_front" id="fruta">' +
                elemento +
            '</div>' +
        '</div>';

        root.appendChild(contenedor);

    });
}
agregar_datos_al_DOM();

// FUNCIÓN DE VOLTEAR LAS CARTAS
let datos_del_dom = document.querySelectorAll(".fruta_back");

function activar(){
    this.classList.add("activar");
}
datos_del_dom.forEach(function(elemento){
    elemento.addEventListener('click', activar);
});
