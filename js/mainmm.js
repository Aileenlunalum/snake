[]
var cabeza=document.getElementById("cabeza");
var contenedor=document.getElementById("contenedor");
var bder=document.getElementById("der");
bder.addEventListener("click",moverDerecha);
var bizq=document.getElementById("izq");
bizq.addEventListener("click",moverIzquierda);
var bajar=document.getElementById("abajo");
bajar.addEventListener("click",moverAbajo);
var subir=document.getElementById("arriba");
subir.addEventListener("click",moverArriba);
var cabeza=document.getElementById("cabeza");
var comida=document.getElementById("comida");
var posicion=cabeza.style.position;
console.log(posicion)

function movercomida(){
  if(cabeza.style.marginLeft == comida.style.marginLeft ){
    if(cabeza.style.marginTop == comida.style.marginTop){
    }

  }
}

var longitud=0;
function moverDerecha(){
  longitud+=50;
   if(longitud<600){
     cabeza.style.marginLeft = (longitud+"px").toString();
   }else{
     alert("Ja,ja perdiste");
   }
}

function moverIzquierda(){
if(longitud>0){
  longitud-=50;
   cabeza.style.marginLeft = (longitud+"px").toString();
  } else{
  alert("Ja,ja fallaste  el juego termino");
  }
}

function moverArriba(){
  longitud+=50;
  if(longitud<600){
   cabeza.style.marginTop= (longitud+"px").toString();
  }else{
   alert("Ja,ja perdiste");
 }
}

function moverAbajo(){
  if(longitud>=50){
  longitud-=50;
 cabeza.style.marginTop= (longitud+"px").toString();
 }else{
 alert("Ja,ja fallaste  el juego termino");
 }
}

/*https://www.w3schools.com/js/js_htmldom_nodes.asp

https://github.com/betamos/Snake-JS/blob/master/snake-js.js
*/
//  <script src="js/main.js"></script>
