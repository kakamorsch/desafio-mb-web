const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let user = {}; // Cadastro do usuário

// Rota para criar usuário
app.post('/user', (req, res) => {
  user = req.body;
  res.status(201).json(user);
});


// Rota para buscar usuário
app.get('/user', (req, res) => {
  res.json(user);
});

// Inicia o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
