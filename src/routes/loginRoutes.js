import express from 'express';
import { registerUser, loginUser } from "../controllers/loginController.js"

const router = express.Router();

// Rota pública que permite o registro de um usuário
router.post('/cadastrar-usuario', registerUser);

// Rota pública que permite o login de um usuário e gera um token JWT
router.post('/login', loginUser);

export default router;