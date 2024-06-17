

const registrar = (req, res) => {
  const { email, password } = req.body;

  res.json( {msg: "Registrando usuario..."})
};

const perfil = (req, res) => {
  res.json({msg: "Mostrando Perfil"})
}

export{
  registrar,
  perfil
}