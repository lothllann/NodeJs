import express from "express";
import LivroController from "../controller/lilvrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listar)
    .get("/livros/busca", LivroController.litarPorEditora)
    .get("/livros/:id", LivroController.listarPorId)
    .post("/livros", LivroController.cadastrar)
    .put("/livros/:id", LivroController.atualizar)
    .delete("/livros/:id", LivroController.excluir)

export default router;    