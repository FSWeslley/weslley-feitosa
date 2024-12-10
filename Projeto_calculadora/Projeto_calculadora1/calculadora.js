// Função para adicionar valores ao visor
function adicionarValor(valor) {
    const resultado = document.getElementById("resultado");
    resultado.value += valor; // Adiciona o valor pressionado ao visor
}

// Função para limpar o visor
function limpar() {
    document.getElementById("resultado").value = ""; // Limpa o visor
}

// Função para calcular o resultado
function calcular() {
    try {
        const resultado = document.getElementById("resultado");
        resultado.value = eval(resultado.value); // Avalia a expressão e mostra o resultado
    } catch (error) {
        alert("Entrada inválida"); // Mostra erro em caso de entrada inválida
    }
}
