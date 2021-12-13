window.onload = function(){
    lista = [
        {descricao: 'Abacaxi', preco: 7.99},
        {descricao: 'Ameixa', preco: 17.00},
        {descricao: 'Banana', preco: 5.20},
        {descricao: 'Carambola', preco: 6.15},
        {descricao: 'Kiwi', preco: 19.99},
        {descricao: 'Maçã', preco: 4.99},
        {descricao: 'Melancia', preco: 10.99},
        {descricao: 'Uva', preco: 11.00},
    ]

    const listaProdutos = document.querySelector('#produtos');
    var total = 0;
    for( let produto in lista){       
        let prodLi = document.createElement('li');
        
        prodLi.setAttribute('class', 'listaFrutas');
        prodLi.setAttribute('data-preco', lista[produto]['preco']);
        prodLi.textContent = lista[produto]['descricao'];
        listaProdutos.appendChild(prodLi);  
    }

    const produtos = document.querySelectorAll('#produtos > li');
    for(let prod of produtos){ 
        prod.addEventListener('click', function(){
            let cesta = document.querySelector('#cestaDoCliente'); 
            let prodCesta = document.createElement('li');
            let itensCesta = document.querySelectorAll('#cestaDoCliente > li');

            let prodEstaCesta = false;
            for(let item of itensCesta){
                if (item.textContent == prod.textContent){
                    alert("Este item já se encontra na Cesta!");
                    prodEstaCesta = true;
                    break;
                }               
            }

            if (prodEstaCesta == false){
                prodCesta.setAttribute('class', 'listaFrutas');
                prodCesta.setAttribute('data-preco', prod.dataset.preco);
                prodCesta.textContent = prod.textContent; 
                cesta.appendChild(prodCesta); 

                calcularPreco();
                adicionaEventoRemover();
            }
        });
    }

    function calcularPreco(){
        const precos = document.querySelectorAll('#cestaDoCliente > li');
        let total = 0;
        for(let preco of precos){
                console.log(preco.dataset.preco);
                total += Number(preco.dataset.preco); 
        }
        const campoTotal = document.querySelector('#mostraTotalCompra');
        campoTotal.value = total.toFixed(2);
    }

    function adicionaEventoRemover(){
        const produtosCesta = document.querySelectorAll('#cestaDoCliente > li');
        let total = 0;
        for(let produto of produtosCesta){
            produto.addEventListener('click', function(){
                produto.remove();
                calcularPreco();
            });    
        }  
    }
}

