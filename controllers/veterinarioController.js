import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  // Prevenir usuarios duplicados
  const existeUsuario = await Veterinario.findOne({ email });
  if(existeUsuario){
    const error = new Error("El usuario ya existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Guardar un nuevo Veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json( veterinarioGuardado );
  } catch (error) {
    console.log(error);
  }

};

const perfil = (req, res) => {
  res.json({msg: "Mostrando Perfil"})
}

export{
  registrar,
  perfil
}