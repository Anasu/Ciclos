const funcion01 = function(n)
{
  if(0 <= n && n <= 100)
  {
    for(i = 0; i <= n; i++)
    {
      console.log(i);
    }
  }
};

const funcion02 = function(respuesta)
{
  let regex = /blanco/i;
  if(regex.test(respuesta))
  {
    console.log("Sipi dipi (⌐■_■)");
  }
  else
  {
    console.log("ノ┬─┬ノ ︵ ( \\o°o)\\");
  }
};

const funcion03 = function(mate, fisica, ciencias)
{
  let promedio = (mate + fisica + ciencias)/3;
  console.log(Math.floor(promedio));
};

const funcion04 = function(frutas)
{
  let regex = /manzana/i;
  for(let fruta of frutas)
  {
    if(!regex.test(fruta))
    {
      console.log(fruta);
    }
  }
};

const funcion05 = function (nombre) 
{
  //Esto valida vocales CON y sin tilde
  let regex = /[aeiou\u00c0-\u00c5\u00c8-\u00cf\u00d2-\u00d6\u00d9-\u00dc]/gi;
  let espaciosRX = /[\d\s]/g;
  let resultado = nombre.match(regex);
  let espacios = nombre.match(espaciosRX);
  console.log(espacios);
  console.log(`Hay ${resultado.length} vocales`);
  console.log(`Hay ${nombre.length - resultado.length - espacios.length} consonantes`);
};

const funcion06 = function()
{
  console.log("Ganaste! (☞ﾟヮﾟ)☞")
};

//Falta integrar los prompts pidiendo weás. Usar switch con cases
funcion01(3);
funcion02("blanco");
funcion02("poto");
funcion03(3.5, 4.0, 7);
funcion04(["xoconostle", "piña", "manzana"]);
funcion05("Perico los PÁlotÉs123");
funcion06();