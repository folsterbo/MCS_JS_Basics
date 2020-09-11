let APIKey = 'fa8edf8c33760477099767f66bdda182';
let city = 'Москва'; //document.forms[0].elements.place.value
let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ APIKey;

let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

if (xhr.status !=200) {
  console.log(xhr.status + ' '+xhr.statusText);
} else {
  var DATA = JSON.parse(xhr.responseText);
  console.log(DATA);
}



Object.values(document.forms[0])[2].onclick = function(e) {
  e.preventDefault();
  document.forms[0].elements.temp.value = (DATA.main.temp - 273).toFixed(1) + '°C';
 }

 Object.values(document.forms[0])[3].onclick = function(e) {
  e.preventDefault();
  document.forms[0].elements.pressure.value = (DATA.main.pressure*0.750062).toFixed(0) + ' мм рт.ст.';
 }