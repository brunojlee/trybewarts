const login = document.querySelector('.input-login');
const senha = document.querySelector('.input-senha');
const entrar = document.querySelector('.btn-entrar');
const submitButton = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const contadorPalavras = document.getElementById('counter');
const agreement = document.getElementById('agreement');
const campoForms = document.getElementById('evaluation-form');

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
/*
function popularForm(
  nome,
  sobrenome,
  email,
  casaEscolhida,
  materiasMarcadas,
  observacoes,
  familiaEscolhida,
  avaliacao
) {
  '<div>Nome: ' + nome + ' ' + sobrenome + '</div>';
  campoForms.insertAdjacentHTML('beforeend', '<div>Email: ' + email + '</div>');
  campoForms.insertAdjacentHTML(
    'beforeend',
    '<div>Casa: ' + casaEscolhida + '</div>'
  );
  campoForms.insertAdjacentHTML(
    'beforeend',
    '<div>Família: ' + familiaEscolhida + '</div>'
  );
  campoForms.insertAdjacentHTML(
    'beforeend',
    '<div>Matérias:' + materiasMarcadas + '</div>'
  );
  campoForms.insertAdjacentHTML(
    'beforeend',
    '<div>Avaliação: ' + avaliacao + '</div>'
  );
  campoForms.insertAdjacentHTML(
    'beforeend',
    '<div>Observações: ' + observacoes + '</div>'
  );
}
*/
/*
function enviarForm() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casaEscolhida = document.querySelector('#house').value;
  let familiaEscolhida = '';

  if (document.querySelector('#radioFront').checked === true) {
    familiaEscolhida = 'Frontend';
  } else if (document.querySelector('#radioBack').checked === true) {
    familiaEscolhida = 'Backend';
  } else {
    familiaEscolhida = 'Fullstack';
  }

  const materiasMarcadas = pegarMaterias();

  let avaliacao = 0;

  for (let i = 0; i < 10; i += 1) {
    if (document.getElementsByName('rate')[i].checked) {
      avaliacao = i + 1;
    }
  }

  const observacoes = document.querySelector('#textarea').value;

  campoForms.innerHTML = popularForm(
    nome,
    sobrenome,
    email,
    casaEscolhida,
    materiasMarcadas,
    observacoes,
    familiaEscolhida,
    avaliacao
  );
}
*/
entrar.addEventListener('click', verificarLogin);

agreement.addEventListener('change', displaySubmit);

textarea.addEventListener('keyup', contador);
