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

entrar.addEventListener('click', verificarLogin);

agreement.addEventListener('change', displaySubmit);

textarea.addEventListener('keyup', contador);


function enviarForm() {
  let nome = document.querySelector('#input-name').value;
  let sobrenome = document.querySelector('#input-lastname').value;
  let email = document.querySelector('#input-email').value;
  let casaEscolhida = document.querySelector('#house').value;
  let familiaEscolhida = "";

  if (document.querySelector('#radioFront').checked === true) {
    familiaEscolhida = 'Frontend';
  } else if (document.querySelector('#radioBack').checked === true) {
    familiaEscolhida = 'Backend';
  } else {
    familiaEscolhida = 'Fullstack';
  }
  
  let materiasMarcadas = [];
 

  if (document.querySelector('#HoFs').checked === true) {
    materiasMarcadas.push(' HoFs');
  }

  if (document.querySelector('#Jest').checked === true) {
    materiasMarcadas.push(' Jest');
  }

  if (document.querySelector('#Promises').checked === true) {
    materiasMarcadas.push(' Promises');
  }

  if (document.querySelector('#React').checked === true) {
    materiasMarcadas.push(' React');
  }

  if (document.querySelector('#SQL').checked === true) {
    materiasMarcadas.push(' SQL');
  }
  
  if (document.querySelector('#Python').checked === true) {
    materiasMarcadas.push(' Python');
  }

  let avaliacao = 0;

  for (let i = 0; i < 10 ; i += 1) {
    if (document.getElementsByName('rate')[i].checked == true) {
      avaliacao = i + 1;
    }
  }  

  let observacoes = document.querySelector('#textarea').value;
    
  campoForms.innerHTML = "<div>Nome: " + nome + " " + sobrenome + "<br>" + "Email: " + email + "<br>" + "Casa: " + casaEscolhida + "<br>" + "Família: " + familiaEscolhida + "<br>" + "Matérias:" + materiasMarcadas + "<br>" + "Avaliação: " + avaliacao + "<br>" + "Observações: " + observacoes + "</div>";

}