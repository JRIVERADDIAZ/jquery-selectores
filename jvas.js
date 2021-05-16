const cost = $(".costo");
const btn = $("button.btn");
const año = $(".año");
const interes = $(".interes");
const cambio = $("costos");
const aCotizar = [];

class Clente {
  constructor(cost, año, interes) {
    this.cost = cost;
    this.año = año;
    this.interes = interes;
    //  console.log(cost,año,interes)
  }
}
console.log(aCotizar);
// esta funcion retornara el valor del seguro a un costo neto
cotizador = () => {
  let porcentaje;
  let costoSeg;
  const result = aCotizar.map((cliente) => {
    if (cliente.cost <= 135000) {
      porcentaje = cliente.interes * 0.01;
      costoSeg = cliente.cost * porcentaje;
      resul = costoSeg;
    } else {
      porcentaje = 12 * 0.01 * cliente.cost;
      resul = porcentaje;
    }
  });

  return resul;
};

// esta funcion retornara el descuento otorgado por pClentee del gobierno =o

promoAutoViejo = (resul) => {

  const output = aCotizar.map((promo) => {

    if (promo.año <= 2005 && promo.año >= 1999) {
      return resul - 900;
    } else if (promo.año <= 1998 && promo.año >= 1993) {
      return resul - 1000;
    } else if (promo.año <= 1998 && promo.año >= 1993) {
      return resul - 1000;
    } else if (promo.año <= 1992 && promo.año >= 1980) {
      return resul - 1300;
    } else {

      return resul;
    }

  });
  console.log(output);
  return output;
};

pintar = () => {
  $("#costos").text(`el costo del seguro es : $${cotizador()}
  el costo del seguro es : $${promoAutoViejo(cotizador())}`);
};

btn.click(() => {
  aCotizar.push(
    new Clente(
      parseInt(cost.val()),
      parseInt(año.val()),
      parseInt(interes.val())
    )
  );
pintar();
});
