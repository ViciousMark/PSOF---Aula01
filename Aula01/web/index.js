const titulo = document.getElementById('titulo');
fetch('httpss://localhost:4000')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

function exemplo() {
    let resultado0 = document.getElementById('resultado0');
    resultado.innerHTML = 'Programando';
}

function exemplo() {
    let resultado = document.getElementById('resultado');
    let dados = {
        preco: Number(document.getElementById('preco').value)
    }
    fetch('httpss://localhost:4000/desconto',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
}   .then(resp => resp.json())
    .then(resp => {
        resultado.innerHTML = `Valor com desconto: R$${resp.precoComDesconto.toFixed(2)}`;
    });