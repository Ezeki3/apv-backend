import express from 'express';
const router = express.Router();
import { agregarPaciente, obtenerPacientes } from '../controllers/PacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';

router.route('/')
  .post(checkAuth, agregarPaciente)
  .get(obtenerPacientes)

export default router;