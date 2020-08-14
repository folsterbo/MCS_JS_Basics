function haveEnough() {
  let totalCash = Number(prompt('Введите сумму наличных'))
  let watchesCount = Number(prompt('Сколько часов вы хотите купить?'))
  let earringsCount = Number(prompt('Сколько сережек вы хотите купить?'))
  let price = Number(prompt('Сколько стоят одни часы?'))
  let watchesSum = watchesCount * price
  let earringsSum = earringsCount * price
  if (totalCash >= watchesSum + earringsSum) {
    return 'Enough $$$';
  } else {
    return 'Not enough $$$';
  }
}

