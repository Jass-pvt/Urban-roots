document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const loginData = { username, password };
  
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      // On successful login, store the token and redirect
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard'; // Redirect to dashboard or home page
    })
    .catch(error => {
      document.getElementById('message').textContent = 'Invalid username or password';
    });
  });
  