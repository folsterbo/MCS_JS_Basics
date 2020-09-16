document.forms[0].onsubmit = function(e) {
  e.preventDefault();
  let APIKey = 'fa8edf8c33760477099767f66bdda182';
  let city = document.querySelector('input[name="place"]').value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status !=200) {
    console.log(xhr.status + ' '+xhr.statusText);
  } else {
    var DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
  }
  document.querySelector('.temperature').innerHTML = (DATA.main.temp - 273).toFixed(0) + '°C';
  document.querySelector('.pressure').innerHTML = 'Давление ' + (DATA.main.pressure*0.750062).toFixed(0) + ' мм рт. ст.';
  document.querySelector('.feels-like').innerHTML = 'Ощущается как ' + (DATA.main.feels_like - 273).toFixed(0) + '°C';
  document.querySelector('.wind').innerHTML = 'Скорость ветра ' + (DATA.wind.speed).toFixed(0) + ' м/с';
  document.querySelector('.humidity').innerHTML = 'Влажность ' + (DATA.main.humidity).toFixed(0) + '%';
 }