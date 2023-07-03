document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        });

        if (response.status === 201) {
            document.getElementById('register-message').innerText = 'User registered successfully';
        } else {
            document.getElementById('register-message').innerText = 'Registration failed';
        }
    } catch (error) {
        console.error(err.message); 
    }
});