window.addEventListener('load', function(){
  console.log('Страница загружена');
});
class Person {
  constructor(name) {
    this.name = name;
    this.happiness = 0;
  }
  hasCat() {
    return this.happiness++;
  }
  hasRest() {
    return this.happiness++;
  }
  hasMoney() {
    return this.happiness++;
  }
  isSunny() {
    let APIKey = 'fa8edf8c33760477099767f66bdda182';
    let city = 'Moscow';
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
    if ((DATA.main.temp - 273).toFixed(0) >= 15) {
      return this.happiness++;
    } else {
      return this.happiness;
    }
  }
}

document.forms[0].onsubmit = function(e) {
  e.preventDefault();
  let name = document.forms[0].elements.name.value;
  let newPerson = new Person (name);
  let cat = document.forms[0].elements.cat.value;
  let rest = document.forms[0].elements.rest.value;
  let money = document.forms[0].elements.money.value;
  if (cat == 'yes') {
    newPerson.hasCat();
  }
  if (rest == 'yes') {
    newPerson.hasRest();
  }
  if (money == 'yes') {
    newPerson.hasMoney();
  }
  newPerson.isSunny();
  document.querySelector('.personName').innerHTML = name + ':';

  if (newPerson.happiness==4) {
    document.querySelector('.icon').innerHTML = '😄';
  }
  if (newPerson.happiness==3) {
    document.querySelector('.icon').innerHTML = '😐';
  }  
  if (newPerson.happiness==2) {
    document.querySelector('.icon').innerHTML = '😐';
  }
  if (newPerson.happiness<=1) {
    document.querySelector('.icon').innerHTML = '☹️';
  }
  }