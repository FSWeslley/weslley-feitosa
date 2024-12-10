// Verifique se o script está carregado corretamente
console.log("Arquivo JavaScript carregado corretamente!");

// Atribuindo o evento de clique ao botão "Adicionar"
document.getElementById("adicionar").addEventListener("click", adicionarItem);

function adicionarItem() {
    const itemInput = document.getElementById("item");
    const quantidadeSelect = document.getElementById("quantidade");
    const lista = document.getElementById("itens");

    const item = itemInput.value.trim();
    const quantidade = quantidadeSelect.value;

    // Verificando se a função está sendo chamada
    console.log(`Item: ${item}, Quantidade: ${quantidade}`);  // Isso vai aparecer no console

    if (item === "") {
        alert("Por favor, insira o nome do item.");
        return;
    }

    // Criando o item na lista
    const li = document.createElement("li");
    li.innerHTML = `<span>${item} - Quantidade: ${quantidade}</span>
                   <button onclick="removerItem(this)">Remover</button>`;

    lista.appendChild(li);

    // Limpando os campos
    itemInput.value = "";
    quantidadeSelect.value = "1";
}

function removerItem(botao) {
    const li = botao.parentElement;
    li.remove();
}
