const funcion01 = function(n)
{
  if(0 <= n && n <= 100)
  {
    for(i = 0; i <= n; i++)
    {
      console.log(i);
    }
    Swal.fire({
      icon: 'info',
      title: 'Tu resultado está listo en la consola'
    });
  }
};

const funcion02 = function(respuesta)
{
  let regex = /blanco/i;
  if(regex.test(respuesta))
  {
    console.log("Sipi dipi (⌐■_■)");
    return true;
  }
  else
  {
    console.log("ノ┬─┬ノ ︵ ( \\o°o)\\");
    return false;
  }
};

const funcion03 = function(mate, fisica, ciencias)
{
  let promedio = (mate + fisica + ciencias)/3;
  console.log(Math.floor(promedio));
  Swal.fire({
    icon: 'warning',
    title: `Tu promedio es un ${promedio}.`
  });
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
  Swal.fire({
    icon: 'info',
    title: 'Tu resultado está listo en la consola'
  });
};

const funcion05 = function (nombre) 
{
  //Esto valida vocales CON y sin tilde
  let regex = /[aeiou\u00c0-\u00c5\u00c8-\u00cf\u00d2-\u00d6\u00d9-\u00dc]/gi;
  let espaciosRX = /[\d\s]/g;
  let resultado = nombre.match(regex);
  let espacios = nombre.match(espaciosRX);
  let vocales = 0;
  let consonantes = nombre.length;
  if(resultado != null)
  {
    vocales = resultado.length;
    consonantes -= vocales;
  }
  if(espacios != null)
  {
    consonantes -= espacios.length
  }

  Swal.fire({
    icon: 'info',
    title: 'En tu nombre hay:',
    html: `<p>${vocales} vocales</p>
           <p>${consonantes} consonantes</p>`
  });
};

const funcion06 = function()
{
  Swal.fire({
    icon: 'success',
    title: 'YAY!!!',
    text: 'Ganaste! (☞ﾟヮﾟ)☞'
  });
  console.log("Ganaste! (☞ﾟヮﾟ)☞")
};