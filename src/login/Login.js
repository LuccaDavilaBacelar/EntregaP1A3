// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const password = document.getElementById('password')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     const usernameValue = username.value;
//     const passwordValue = password.value;

//     if (usernameValue === "") {
//         setErrorFor(username, "O nome de usuário é obrigatório.");
//       } else {
//         setSuccessFor(username);
//       }

//     if (passwordValue === "") {
//         setErrorFor(password, "A senha é obrigatória.");
//       } else if (passwordValue.length < 4) {
//         setErrorFor(password, "A senha precisa ter no mínimo 4 caracteres.");
//       } else {
//         setSuccessFor(password);
//       }

//     const formControls = form.querySelectorAll(".form-control");

//     const formIsValid = [...formControls].every((formControl) => {
//         return formControl.className === "form-control success";
//     });

//     if (formIsValid) {
//         window.location.href = "../home/Home.html"
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");

//     // adicionar mensagem de erro
//     small.innerText = message;

//     // adicionar a classe de erro
//     formControl.className = "form-control error";
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;

//     // adicionar a classe de sucesso
//     formControl.className = "form-control success";
// }





const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const passwordValue = password.value;

    // Obter informações armazenadas no Local Storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (usernameValue === storedUsername && passwordValue === storedPassword) {
        alert("Login bem-sucedido!");

        // Redirecionar para a página home
        window.location.href = "../home/Home.html";
    } else {
        alert("Nome de usuário ou senha inválidos.");
    }
}