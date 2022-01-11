let login = document.getElementsByClassName('input-login').value;
let senha = document.getElementsByClassName('input-senha').value;
let entrar = document.getElementsByClassName('btn-entrar');

function verificarLogin() {
    if (login === 'tryber@teste.com' && senha === '123456') {
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }
}

entrar.addEventListener('click', verificarLogin());
