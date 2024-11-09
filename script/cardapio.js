function Calcular() {
    const items = {
        pizza_portuguesa: { name: 'Pizza Portuguesa', price: 50.00 },
        pizza_mussarela: { name: 'Pizza Mussarela', price: 50.00 },
        pizza_calabresa: { name: 'Pizza Calabresa', price: 55.00 },
        pizza_frango: { name: 'Pizza Frango', price: 52.00 },
        pizza_quatro_queijos: { name: 'Pizza Quatro Queijos', price: 58.00 },
        pizza_calabresa_queijo: { name: 'Pizza Calabresa com Queijo', price: 59.00 },
        fanta_laranja: { name: 'Fanta Laranja', price: 5.00 },
        coca_cola: { name: 'Coca Cola', price: 5.00 },
        guarana: { name: 'Guaraná', price: 5.00 },
        suco_uva: { name: 'Suco de Uva', price: 6.00 },
        suco_laranja: { name: 'Suco de Laranja', price: 6.00 },
        suco_maracuja: { name: 'Suco de Maracujá', price: 10.00 }
    };
    
    let total = 0;
    let receipt = '';
    
    for (let item in items) {
        let quantity = document.getElementById(item).value;
        if (quantity && !isNaN(quantity) && parseInt(quantity) > 0) {
            let itemTotal = items[item].price * parseInt(quantity);
            total += itemTotal;
            receipt += `<li>${items[item].name} (x${quantity}) - R$${itemTotal.toFixed(2)}</li>`;
        }
    }
    if (total!= 0){

        receipt += `</ul><h4>Total: R$${total.toFixed(2)}</h4>`;
        document.getElementById('total').innerHTML = receipt;
    }else{
        document.getElementById('total').innerHTML = `<h3>Selecione algum produto</h3>`;
        document.getElementById('confirmar_pedido').style.visibility="hidden"; 
        document.getElementById('fechar_modal').innerText = "Ok" 

    }
}

function confirmar_pedido() {
    alert('Pedido Confirmado!')
    location.reload()
}
