

const registrar = (req, res) => {
  res.send("desde api/veterinarios")
};

const perfil = (req, res) => {
  res.send("desde api/veterinarios/perfil")
}

export{
  registrar,
  perfil
}