
// Scroll suave para links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Função para alternar entre português e inglês
function toggleLang() {
  const body = document.body;
  body.classList.toggle('en-active');
  
  // Seleciona os campos
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');

  // Traduz os placeholders dinamicamente
  if (body.classList.contains('en-active')) {
    nameInput.placeholder = "Your name";
    emailInput.placeholder = "Your email";
    messageInput.placeholder = "Write your message here...";
  } else {
    nameInput.placeholder = "Seu nome";
    emailInput.placeholder = "Seu e-mail";
    messageInput.placeholder = "Escreva sua mensagem aqui...";
  }
}



// Adiciona evento de clique ao botão de alternância de idioma
//document.getElementById('toggle-lang').addEventListener('click', toggleLang);
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;
    
    if (!name || !email || !message) {
        const msg = document.body.classList.contains('en-active') 
            ? "Please fill in all fields" 
            : "Por favor, preencha todos os campos";
        alert(msg);
        e.preventDefault();
    }
});
