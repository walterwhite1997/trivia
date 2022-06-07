//array con las respuestas correctas
let correctas = [3,1,2,2,3];

//array donde vamos a guardar las respuesta del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//función para tomar el numero de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
  //guardamos la respuesta elegida
  opcion_elegida[num_pregunta] = seleccionada.value;

  //el siguiente código es para poner en color blanco
  //el fondo de los inputs para cuando elige otra opción
  //armo el id para seleccionar el section correspondiente
  id="p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  //doy el color a label seleccionado
seleccionada.parentNode.style.backgroundColor = "#00AA";
}

//funcion para comparar los arrays y saber cuantas estuvieron correctas

function corregir(){
  cantidad_correctas = 0;
for(i=0; i < correctas.length;i++) {
  if(correctas[i]==opcion_elegida[i]);
     cantidad_correctas++;
     }
}

document.getElementById("resultado").innerHTML = cantidad_correctas; 
