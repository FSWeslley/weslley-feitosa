document.getElementById("gerarTabuada").addEventListener("click", gerarTabuada);

function gerarTabuada() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("tabuada");

    // Limpa o conteúdo anterior
    resultado.innerHTML = "";

    // Verifica se o número é válido
    if (numero < 0 || numero > 10 || numero === "") {
        alert("Por favor, insira um número entre 0 e 10.");
        return;
    }

    // Gera a tabuada
    for (let i = 0; i <= 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(li);
    }
}
