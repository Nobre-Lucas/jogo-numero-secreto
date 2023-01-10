function validaChute(chute) {
    const numero =+ chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += "<div>VALOR INVÁLIDO: O chute deve ser um número inteiro<\div>";
    } else if (numeroForaDoLimite(numero)) {
        elementoChute.innerHTML += `<div>VALOR INVÁLIDO: O chute deve estar entre ${menorValor} e ${maiorValor}</div>`;
    } else if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!<\h2>
            <h3>O número secreto era ${numeroSecreto}<\h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoLimite(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", evento => {
    if (evento.target.id == "jogar-novamente") {
        window.location.reload(); 
    }
})