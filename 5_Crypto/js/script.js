let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

//массивы для обращения к HTML
let names = document.querySelectorAll('.name')
let prices = document.querySelectorAll('.price')
let colors = document.querySelectorAll('.color')
//заполение HTML данными из массива crypto
for (let i = 0; i < names.length; i++) {
    names[i].innerHTML=crypto[i].name;
    prices[i].innerHTML=crypto[i].price;
}
//созданние массива с пользовательскими цветами и изменение существующих стилей 
let myColors = ['#cdea7a','#c6b9ff','#f8bfc7']
for (let j = 0; j < colors.length; j++) {
  colors[j].style.backgroundColor = myColors[j];
}
//определяем самую дорогую криптовалюту
function compare(a, b) {
  if (a < b) return 1; 
  if (a == b) return 0; 
  if (a > b) return -1; 
}

let priceArr = [];
for (let i = 0; i < crypto.length; i++) {
  priceArr.push(crypto[i].price);
} 

priceArr.sort(compare);
//задаем графику самой дорогой валюты 100% ширины
for (let i = 0; i < crypto.length; i++) {
  colors[i].style.width = `${crypto[i].price/priceArr[0]*100}%`;
}