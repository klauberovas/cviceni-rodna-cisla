const checkBirthId = (string) => {
  if (string.length !== 10) {
    return 'invalidLength';
  }
  if (!Number.isInteger(Number(string))) {
    return 'notANumber';
  }
  if (string % 11 !== 0) {
    return 'failedChecksum';
  }
  return 'ok';
};

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isDigit = (string) => {
  return digits.includes(string);
};

const validateCharacters = (string) => {
  const result = [];
  Array.from(string).forEach((prvek) => {
    result.push({ char: prvek, digit: isDigit(prvek) });
  });
  console.log(result);
  return result;
};

const formElm = document.getElementById('form');

formElm.addEventListener('submit', (e) => {
  e.preventDefault();

  const vystupElm = document.getElementById('vystup');
  const inputElm = document.getElementById('vstup');
  const resultElm = document.querySelectorAll('.result');
  if (checkBirthId(inputElm.value) === 'ok') {
    vystupElm.textContent = '✔️ V pořádku.';
  } else {
    vystupElm.textContent = '❌ V rodném čísle jsou chyby.';
  }
  const result = validateCharacters(inputElm.value);

  resultElm.forEach((div, index) => {
    div.innerHTML = result[index].char;
    if (result[index].digit) {
      div.classList.add('result--true');
      div.classList.remove('result--false');
    } else {
      div.classList.add('result--false');
      div.classList.remove('result--true');
    }
  });
  inputElm.value = '';
});
