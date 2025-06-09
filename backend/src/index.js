const express = require("express");
const { getTodosUsuarios, getUsuarioPorId } = require("./usuarios");

const app = express();
const PORT = 3001;

app.get("/usuarios", (req, res) => {
  res.json(getTodosUsuarios());
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = getUsuarioPorId(req.params.id);
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
  res.json(usuario);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
