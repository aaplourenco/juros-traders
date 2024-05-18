function validarCampo(element) {
    const value = parseFloat(element.value);
    if (!isNaN(value) && value > 0) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

function calcularMontante() {
    const valorInicialElement = document.getElementById('valorInicial');
    const taxaDeJurosElement = document.getElementById('taxaDeJuros');
    const tradersElement = document.getElementById('traders');
    const resultadoElement = document.getElementById('resultado');

    const valorInicial = parseFloat(valorInicialElement.value);
    const taxaDeJuros = parseFloat(taxaDeJurosElement.value);
    const traders = parseInt(tradersElement.value);

    if (isNaN(valorInicial) || valorInicial <= 0) {
        resultadoElement.textContent = "Por favor, insira um valor inicial válido e positivo.";
        valorInicialElement.classList.add('invalid');
        return;
    } else {
        valorInicialElement.classList.remove('invalid');
    }

    if (isNaN(taxaDeJuros) || taxaDeJuros <= 0) {
        resultadoElement.textContent = "Por favor, insira uma taxa de juros válida e positiva.";
        taxaDeJurosElement.classList.add('invalid');
        return;
    } else {
        taxaDeJurosElement.classList.remove('invalid');
    }

    if (isNaN(traders) || traders <= 0) {
        resultadoElement.textContent = "Por favor, insira um número válido e positivo de traders.";
        tradersElement.classList.add('invalid');
        return;
    } else {
        tradersElement.classList.remove('invalid');
    }

    let montanteTotal = valorInicial;

    for (let i = 1; i <= traders; i++) {
        let jurosDoMes = montanteTotal * (taxaDeJuros / 100);
        montanteTotal += jurosDoMes;
    }

    resultadoElement.textContent = `O montante final após ${traders} traders é de R$ ${montanteTotal.toFixed(2)}`;
}

document.getElementById('valorInicial').addEventListener('input', function() {
    validarCampo(this);
});

document.getElementById('taxaDeJuros').addEventListener('input', function() {
    validarCampo(this);
});

document.getElementById('traders').addEventListener('input', function() {
    validarCampo(this);
});

document.getElementById('valorInicial').addEventListener('focus', function() {
    this.classList.remove('valid', 'invalid');
});

document.getElementById('taxaDeJuros').addEventListener('focus', function() {
    this.classList.remove('valid', 'invalid');
});

document.getElementById('traders').addEventListener('focus', function() {
    this.classList.remove('valid', 'invalid');
});