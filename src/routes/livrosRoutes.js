import express from "express";
import LivroController from "../controller/lilvrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listar)
    .post("/livros", LivroController.cadastrar)

export default router;    