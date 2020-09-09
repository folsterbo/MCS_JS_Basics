let myPforEach = document.querySelector('.forEach');
let myPfilter = document.querySelector('.filter');
let myArr = [];
let myNewArr = [];

//наполняю массив myArr числами от 1 до 99999
for (let i=1; i<100000; i++) {
  myArr.push(i);
}
//перебираю элементы массива myArr, и вставляю в массив myNewArr числа, без остатка делящиеся на 6
myArr.forEach(function (i) {
  if (i%6 == 0) {
    myNewArr.push(i);
  }
})
//вывожу myNewArr
myPforEach.innerHTML = myNewArr.join(', ');


//фильтрую элементы массива myArr, создавая новый массив myFilterArr
let myFilterArr = myArr.filter(function (i) {
  return i%6 == 0;
})
//вывожу myFilterArr
myPfilter.innerHTML = myFilterArr.join(', ');