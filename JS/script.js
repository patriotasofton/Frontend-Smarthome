// Código JavaScript para adicionar produtos ao carrinho
const selectButtons = document.querySelectorAll('.select-button');
const cartItems = document.getElementById('cart-items');
const confirmButton = document.getElementById('confirm-button');

let selectedProducts = [];

// Adiciona evento de clique para cada botão de seleção
selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product-name');

    // Adiciona o produto como um objeto se não estiver na lista
    if (!selectedProducts.some(product => product.name === productName)) {
      selectedProducts.push({ name: productName });
      updateCart();
    }
  });
});

// Atualiza a lista de itens no carrinho
function updateCart() {
  cartItems.innerHTML = ''; // Limpa a lista atual
  selectedProducts.forEach((product, index) => {
    const li = document.createElement('li');
    li.textContent = product.name; // Exibe apenas o nome do produto
    
    // Cria um botão para remover o produto
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x'; // Texto do botão de remover
    removeButton.className = 'remove-button'; // Classe para estilo (opcional)
    removeButton.addEventListener('click', () => {
      // Remove o produto do carrinho
      selectedProducts.splice(index, 1);
      updateCart(); // Atualiza o carrinho
    });

    li.appendChild(removeButton); // Adiciona o botão de remover ao item
    cartItems.appendChild(li); // Adiciona o item à lista de carrinho
  });
}

// Adiciona evento de clique ao botão de confirmação
confirmButton.addEventListener('click', () => {
  if (selectedProducts.length > 0) {
    // Armazena os produtos no localStorage
    localStorage.setItem('cartItems', JSON.stringify(selectedProducts)); // Corrigido para o nome correto da chave
    // Redireciona para a tela do carrinho
    window.location.href = 'telaDeAmostra.html'; // Corrigido para o nome correto da tela do carrinho
  } else {
    alert('Por favor, selecione pelo menos um produto.');
  }
});
