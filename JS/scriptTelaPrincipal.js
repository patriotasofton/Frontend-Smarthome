document.getElementById('inscreva-se-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'none' || loginForm.style.display === '' ? 'block' : 'none';
});
