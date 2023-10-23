const numeroCerto = 2
Math.floor(Math.random() * 10) + 1;
let acertou = false;

while (!acertou) {
    let tentativa = parseInt(prompt("Escolha um numero de 1 a 10:"));

switch (tentativa) {
    case numeroCerto:
        alert("Parabéns você acertou!");
        acertou = true    
            break;

    default:
    alert("Tente novamente")
}
}

