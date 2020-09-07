const bSin = document.forms[0];
const formSin = document.forms[0].elements.angle.value;
const angle = Number(formSin);


bSin.onsubmit = function(e) {
 e.preventDefault();
 document.forms[0].elements.total.value = 'sin(' + document.forms[0].elements.angle.value + '°)=' + Math.sin(Number(document.forms[0].elements.angle.value)*Math.PI/180).toFixed(3);
}

//Шаблонная строка
bSin.onsubmit = function(e) {
  e.preventDefault();
  document.forms[0].elements.total.value = `sin(${document.forms[0].elements.angle.value}°)=${Math.sin(Number(document.forms[0].elements.angle.value)*Math.PI/180).toFixed(3)}`;
 }