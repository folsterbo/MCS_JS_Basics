document.body.style.backgroundColor = '#696969';

document.querySelector('.page').style.backgroundColor = 'ghostwhite';

document.querySelector('.name').innerHTML = 'DJ Rashad';

let image = document.querySelector('img');
image.setAttribute('src','https://truantsblog.com/wp-content/uploads/2014/04/flg-rashad-1.jpg');

const Animated = document.querySelector('.short-bio');
Animated.className +=' animated';
console.log(Animated.className);