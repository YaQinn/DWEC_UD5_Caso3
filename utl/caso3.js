window.onload=load;

var num = [1,2,3,4];
var x= 0;
var y= 0;

function load()
{
  num = num.sort(function(){return Math.random()-0.5});
  y=0;
  x=0;
  asignaNum();
}

function asignaNum()
{
  var one = document.getElementById("1").innerHTML=num[0];
  var two = document.getElementById("2").innerHTML=num[1];
  var three = document.getElementById("3").innerHTML=num[2];
  var four = document.getElementById("4").innerHTML=num[3];
  alert("Empieza la partida :)");
  alert("Haz click en los números en orden creciente");
  listener();
}

function listener()
{
  var one = document.getElementById("1");
  var two = document.getElementById("2");
  var three = document.getElementById("3");
  var four = document.getElementById("4");
  one.addEventListener("click", recogeNum,false);
  two.addEventListener("click", recogeNum,false);
  three.addEventListener("click", recogeNum,false);
  four.addEventListener("click", recogeNum,false);
}

function recogeNum()
{
  var clic = event.target;
  var num1 = parseInt(clic.innerHTML);
  comparaNum(num1);
}

function comparaNum(n)
{
  //console.log(n);
  y=n;
  if (x==0)
  {
    if (y==1)
    {
      alert("¡CORRECTO!");
      x=y;
    }
    else
      error();
  }
  else
  {
    if (y==x+1)
    {
      alert("¡CORRECTO!");
      x=y;
    }
    else
      error();
  }
  //Una vez hecho lo anterior, si x==4, fin de la partida
  if (x==4)
  {
    alert("FIN DE PARTIDA. Para nueva partida, pulsa aceptar.");
    load();
  }
}


function error()
{
  alert("¡INCORRECTO!");
}
