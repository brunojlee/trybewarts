const login = document.querySelector('.input-login');
const senha = document.querySelector('.input-senha');
const entrar = document.querySelector('.btn-entrar');
const submitButton = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const contadorPalavras = document.getElementById('counter');
const agreement = document.getElementById('agreement');

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
