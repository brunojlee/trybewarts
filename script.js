const login = document.querySelector('.input-login');
const senha = document.querySelector('.input-senha');
const entrar = document.querySelector('.btn-entrar');
const submitButton = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const contadorPalavras = document.getElementById('counter');
const agreement = document.getElementById('agreement');
const campoForms = document.getElementById('evaluation-form');
const casa = document.querySelector('#house');
const elementoFamilia = document.getElementsByName('family');
const elementoAvaliacao = document.getElementsByName('rate');
const elementoMateria = document.getElementsByClassName('subject');
let familiaEscolhida = '';
const materiasMarcadas = [];
let nome = '';
let sobrenome = '';
let email = '';
let casaEscolhida = '';
let avaliacao = 0;
let observacoes = '';

function verificarLogin(e) {
  e.preventDefault();
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function displaySubmit() {
  if (submitButton.disabled === false) {
    submitButton.disabled = true;
    submitButton.style.display = 'none';
  } else if (submitButton.disabled === true) {
    submitButton.disabled = false;
    submitButton.style.display = 'flex';
  }
}

function contador() {
  const counter = 500;
  contadorPalavras.innerHTML = counter - textarea.value.length;
}

entrar.addEventListener('click', verificarLogin);

agreement.addEventListener('change', displaySubmit);

textarea.addEventListener('keyup', contador);

function printForm() {
  campoForms.innerHTML = `<div>Nome: ${nome} ${sobrenome}</div>`;
  campoForms.insertAdjacentHTML('beforeend', `<div>Email: ${email}</div>`);
  campoForms.insertAdjacentHTML('beforeend', `<div>Casa: ${casaEscolhida}</div>`);
  campoForms.insertAdjacentHTML('beforeend', `<div>Família: ${familiaEscolhida}</div>`);
  campoForms.insertAdjacentHTML('beforeend', `<div>Matérias: ${materiasMarcadas}</div>`);
  campoForms.insertAdjacentHTML('beforeend', `<div>Avaliação: ${avaliacao}</div>`);
  campoForms.insertAdjacentHTML('beforeend', `<div>Observações: ${observacoes}</div>`);
}

function enviarForm2() {
  for (let i = 0; i < 10; i += 1) {
    if (elementoAvaliacao[i].checked === true) {
      avaliacao = i + 1;
    }
  }
}

function enviarForm3() {
  for (let i = 0; i < 3; i += 1) {
    if (elementoFamilia[i].checked === true) {
      familiaEscolhida = elementoFamilia[i].value;
    }
  }
}

function enviarForm() {
  nome = document.querySelector('#input-name').value;
  sobrenome = document.querySelector('#input-lastname').value;
  email = document.querySelector('#input-email').value;
  casaEscolhida = casa.value;

  for (let i = 0; i < 6; i += 1) {
    if (elementoMateria[i].checked === true) {
      materiasMarcadas.push(elementoMateria[i].id);
    }
  }
  observacoes = document.querySelector('#textarea').value;
  enviarForm2();
  enviarForm3();
  printForm();
}

submitButton.addEventListener('click', enviarForm);
