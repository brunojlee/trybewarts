let login = document.querySelector('.input-login');
let senha = document.querySelector('.input-senha');
let entrar = document.querySelector('.btn-entrar');

function verificarLogin() {        
    if (login.value == 'tryber@teste.com' && senha.value== '123456') {
        alert("Olá, Tryber!");
    } else {
        alert("Email ou senha inválidos.");
    }
}

entrar.addEventListener('click', function (e) {       
    e.preventDefault();
    verificarLogin()
});