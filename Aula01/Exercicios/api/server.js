const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json('Bem vindo a lista de exercícios');
});
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/salariofamilia', (req, res) => {
    const { salario } = req.body;

    if (!salario || typeof salario !== 'number') {
        return res.status(400).json({ error: 'Salário inválido ou não fornecido.' });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {    
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14; 
    }

    const salarioFinal = salario - desconto;

    res.json({
        salarioOriginal: salario.toFixed(2),
        desconto: desconto.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2),
    });
});

app.post('/inss', (req, res) => {
    const { salario } = req.body;

    if (!salario || typeof salario !== 'number') {
        return res.status(400).json({ error: 'Salário inválido ou não fornecido.' });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {    
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14; 
    }

    const salarioFinal = salario - desconto;

    res.json({
        salarioOriginal: salario.toFixed(2),
        desconto: desconto.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2),
    });
});

app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ error: 'Dados inválidos. Envie nome e preço válido.' });
    }


    let aumento = preco < 1000 ? 0.05 : 0.07;
    let novoPreco = preco * (1 + aumento);

    res.json({
        mercadoria: nome,
        novoPreco: novoPreco.toFixed(2)
    });
});

app.use(cors());
app.use(express.json());

app.post('/numeros', (req, res) => {
    const { numeros } = req.body;

    
    if (!Array.isArray(numeros) || numeros.length !== 6 || !numeros.every(num => Number.isInteger(num))) {
        return res.status(400).json({ error: 'Envie um array com exatamente 6 números inteiros.' });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({
        maiorNumero
    });
});


app.use(cors());
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length !== 5 || !numeros.every(num => Number.isInteger(num))) {
        return res.status(400).json({ error: 'Envie um array com exatamente 5 números inteiros.' });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({
        numerosOrdenados
    });
});


app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});