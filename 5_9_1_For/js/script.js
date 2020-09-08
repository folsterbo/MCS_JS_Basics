let myP = document.querySelector('p');
let myArr = [];

for (let i=1; i<100000; i++) {
  if (i%6 == 0) {
    myArr.push(i+'\n');
  }
}

myP.innerHTML = myArr;
