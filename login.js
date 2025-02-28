const users = [
    { usuario: "Gabriel", senha: "gabriel123" },
    { usuario: "Ricardo", senha: "ricardo123" },
    { usuario: "Eduardo", senha: "eduardo123" }
  ];
  
  document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
  
    const login = users.find(u => u.usuario === usuario && u.senha === senha);
  
    if (login) {
      alert("Login realizado")
     
    } else {
      alert("Login ou Senha invalido")
    }
  });