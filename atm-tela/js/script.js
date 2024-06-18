document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');

    passwordInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        passwordInput.value = passwordInput.value.replace(/\D/g, '');

        // Check if the input has reached the maximum length
        if (passwordInput.value.length === 6) {
            window.location.href = 'opcoes.html';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contaInput = document.getElementById('conta');

    contaInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        contaInput.value = contaInput.value.replace(/\D/g, '');
    });
});
