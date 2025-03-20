const users = [
  { usuario: "Gabriel", senha: "gabriel123" },
  { usuario: "Ricardo", senha: "ricardo123" },
  { usuario: "Eduardo", senha: "eduardo123" }
];

function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario && senha) {
      console.log('Dados do formulário:', {
          usuario: usuario,
          senha: senha
      });

      alert('Login realizado com sucesso!');
      return true;
  } else {
      alert('Por favor, preencha todos os campos!');
      return false;
  }
}