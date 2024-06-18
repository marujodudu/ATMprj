document.getElementById('amount').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Remove tudo que não é número
    value = (value / 100).toFixed(2) + ''; // Divide por 100 para obter centavos
    value = value.replace('.', ','); // Substitui ponto por vírgula
    value = value.replace(/(\d)(?=(\d{3})+\,)/g, '$1.'); // Adiciona pontos a cada milhar
    e.target.value = 'R$ ' + value;
});

function formatCurrency() {
    let amount = document.getElementById('amount').value;
    alert('Você deseja sacar ' + amount);
}

function showLoadingScreen() {
    window.location.href = 'load.html';
}
