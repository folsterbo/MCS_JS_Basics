const bSin = document.forms[0];
const formSin = document.forms[0].elements.angle.value;
const angle = Number(formSin);


bSin.onsubmit = function(e) {
 e.preventDefault();
 document.forms[0].elements.total.value = 'sin(' + String(document.forms[0].elements.angle.value) + '°)=' + String(Math.sin(Number(document.forms[0].elements.angle.value)*Math.PI/180).toFixed(3));
}
