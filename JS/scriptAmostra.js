document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
  
    // Recupera os produtos selecionados do localStorage
    const selectedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Funções específicas para cada produto
    function funcaoOutroServidorDeEnergia() {
      alert("Função específica para Servidor de Energia ativada!");
    }
  
    function funcaoOutroTermostatoInteligente() {
      alert("Função específica para Termostato Inteligente ativada!");
    }
  
    function funcaoOutroCameraSeguranca() {
      alert("Função específica para Câmera de Segurança ativada!");
    }
  
    function funcaoOutroDetectorDeFumaca() {
      alert("Função específica para Detector de Fumaça ativada!");
    }
  
    function funcaoOutroFechaduraInteligente() {
      alert("Função específica para Fechadura Inteligente ativada!");
    }
  
    function funcaoOutroMedidorDeGas() {
      alert("Função específica para Medidor de Gás ativada!");
    }
  
    // Mapeamento dos produtos para os textos dos botões "Outro"
    const buttonLabels = {
      'Servidor de Energia': 'Ver valor da conta de luz',
      'Termostato Inteligente': 'Ajustar temperatura',
      'Câmera de Segurança': 'Acessar câmera de segurança',
      'Detector de Fumaça': 'Testar detector de fumaça',
      'Fechadura Inteligente': 'Gerenciar acesso',
      'Medidor de Gás': 'Ver consumo de gás',
    };
  
    // Verifica se há produtos no carrinho e os exibe com botões
    if (selectedProducts.length > 0) {
      selectedProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
  
        // Cria o switch
        const switchLabel = document.createElement('label');
        switchLabel.classList.add('switch');
  
        const switchInput = document.createElement('input');
        switchInput.type = 'checkbox';
  
        const slider = document.createElement('span');
        slider.classList.add('slider');
  
        switchLabel.appendChild(switchInput);
        switchLabel.appendChild(slider);
        li.appendChild(switchLabel);
  
        const buttonExtra = document.createElement('button');
        buttonExtra.textContent = buttonLabels[product.name] || "Função Extra";
        buttonExtra.classList.add("extra-button");
  
    
        // Chama a função correspondente ao produto
        buttonExtra.addEventListener('click', () => {
          switch (product.name) {
            case 'Servidor de Energia':
              funcaoOutroServidorDeEnergia();
              break;
            case 'Termostato Inteligente':
              funcaoOutroTermostatoInteligente();
              break;
            case 'Câmera de Segurança':
              funcaoOutroCameraSeguranca();
              break;
            case 'Detector de Fumaça':
              funcaoOutroDetectorDeFumaca();
              break;
            case 'Fechadura Inteligente':
              funcaoOutroFechaduraInteligente();
              break;
            case 'Medidor de Gás':
              funcaoOutroMedidorDeGas();
              break;
            default:
              alert("Função não definida para este produto.");
          }
        });
  
        // Adiciona o item completo com botões à lista do carrinho
        li.appendChild(buttonExtra);
        cartItems.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = "Nenhum produto selecionado.";
      cartItems.appendChild(li);
    }
  });
  