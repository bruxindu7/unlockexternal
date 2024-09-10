document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = 'dashboard/dashboard.html'; // Redireciona para o dashboard
            } else {
                message.textContent = data.message;
                message.style.color = 'red';
            }
        } catch (error) {
            message.textContent = 'Erro ao tentar fazer login. Tente novamente mais tarde.';
            message.style.color = 'red';
        }
    });
});
