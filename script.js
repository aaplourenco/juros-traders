function calcularMontante() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxaDeJuros = parseFloat(document.getElementById('taxaDeJuros').value);
    const traders = parseInt(document.getElementById('traders').value);

    const resultadoElement = document.getElementById('resultado');

    if (isNaN(valorInicial) || isNaN(taxaDeJuros) || isNaN(traders) || valorInicial <= 0 || taxaDeJuros <= 0 || traders <= 0) {
        resultadoElement.textContent = "Por favor, insira valores válidos e positivos para valor inicial, taxa de juros e traders.";
        return;
    }

    let montanteTotal = valorInicial;

    for (let i = 1; i <= traders; i++) {
        let jurosDoMes = montanteTotal * (taxaDeJuros / 100);
        montanteTotal += jurosDoMes;
    }

    resultadoElement.textContent = `O montante final após ${traders} traders é de R$ ${montanteTotal.toFixed(2)}`;
}