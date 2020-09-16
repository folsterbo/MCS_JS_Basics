class Tiger {
  constructor(name) {
    this.name = name;
  }
  feedCat() {
    return 'Purrrrrr';
  }
}
class angryTiger extends Tiger {
  throwDart() {
    return 'ZzZzzZzZz';
  }
}
const Vasya = new angryTiger('Vasya');
console.log(Vasya);