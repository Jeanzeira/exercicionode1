const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a rota raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a rota para a página de contato
app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'contato.html'));
});

// Define a rota para a página "Sobre"
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'sobre.html'));
});

// Configura o middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
