// const personalIdNumberText = prompt(
//   'Zadejte prosím vaše rodné číslo bez lomítka.',
// );
//

const checkBirthId = (personalIdNumberText) => {
  if (personalIdNumberText.length !== 10) {
    return 'invalidLength';
  }

  const personalIdNumber = Number(personalIdNumberText);
  if (!Number.isInteger(personalIdNumber)) {
    return 'notANumber';
  }

  if (personalIdNumber % 11 !== 0) {
    return 'failedChecksum';
  }

  return 'ok';
};

const rodnaCislaKOtestovani = [
  '123',
  'nepovím',
  '7060201236',
  '7060201235',
  '123456789123456789',
  '9062185440',
  '123č56q8y7',
];

rodnaCislaKOtestovani.forEach((prvek) => {
  const vysledek = checkBirthId(prvek);
  console.log(`Testovaná hodnota: ${prvek} a výsledek je ${vysledek}`);
});

const isDigit = (string) => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return digits.includes(string);
};

const validateCharacters = (string) => {
  const result = [];
  const poleZnaku = string.split('');
  poleZnaku.forEach((znak) => {
    const charResult = {
      char: znak,
      digit: isDigit(znak),
    };
    return result.push(charResult);
  });
  return console.log(result);
};

validateCharacters('123č56q8y7');
validateCharacters('7060201236');

const formElm = document.getElementById('form');
const messageElm = document.getElementById('vystup');
const inputElm = document.getElementById('vstup');

formElm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkBirthId(inputElm.value) === 'ok') {
    messageElm.textContent = '✔️ V pořádku.';
  } else {
    messageElm.textContent = '❌ V rodném čísle jsou chyby.';
  }
});
