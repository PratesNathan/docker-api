const usuarios = [
  { id: 1, nome: "Ash Ketchum", cidade: "Pallet Town" },
  { id: 2, nome: "Misty", cidade: "Cerulean City" },
  { id: 3, nome: "Brock", cidade: "Pewter City" }
];

function getTodosUsuarios() {
  return usuarios;
}

function getUsuarioPorId(id) {
  return usuarios.find(u => u.id === parseInt(id));
}

module.exports = {
  getTodosUsuarios,
  getUsuarioPorId
};
