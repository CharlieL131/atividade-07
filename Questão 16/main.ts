function advinheNumero(): void {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):") || '0', 10);
        tentativas++;

        if (tentativa === numeroAleatorio) {
            alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            acertou = true;
        } else if (tentativa < numeroAleatorio) {
            alert("O número correto é maior.");
        } else {
            alert("O número correto é menor.");
        }
    }
}
