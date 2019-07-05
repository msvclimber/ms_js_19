const var1 = requestNumber('Введите первую переменную');
const var2 = requestNumber('Введите вторую переменную');
const action = getAction();
const result = calculate(var1, var2, action);
showResultat(var1, var2, action, result)

function requestNumber(message) {
  let n = null;
  let value = null;
  while(!n) {
    let innerMessage = n === null ? message : 'Ошибка ввода: ' + value + ` некорректное значение. Введите число.`
    value = prompt(innerMessage);
    n = parseFloat(value);
  }
  return n;
}

function getAction() {
  //так как в лекции нету логических операторов и рекурсий сделаем так
  let a = null;
  while(!a) {
    let message = a === null
      ? 'Выберите операцию: +, -, *, /'
      : 'Ошибка ввода: ' + a + ` некорректное значение. Выберете одно из этих значений: +, -, *, /`
    a = requestAction(message)
  }
  return a;
}

function requestAction(message) {
  switch(prompt(message)){
    case '+':
      return '+';
      break;
    case '-':
      return '-';
      break;
    case '*':
      return '*';
      break;
    case '/':
      return '/';
      break;
    default:
      return '';
  }
}

function calculate(v1, v2, action) {
  switch(action){
    case '+':
      return v1 + v2;
      break;
    case '-':
      return v1 - v2;
      break;
    case '*':
      return v1 * v2;
      break;
    case '/':
      return v1 / v2;
      break;
    default:
      return NaN;
  }
}

function showResultat(var1, var2, action, result){
  document.write(var1 + ' ' + action + ' ' + var2 + ' = ' + result);
}
