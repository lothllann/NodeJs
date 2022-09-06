import express from "express";
import AutorController from "../controller/autoresController.js";

const router = express.Router();

router
    .get("/autor", AutorController.listar)
    .get("/autor/:id", AutorController.listarPorId)
    .post("/autor", AutorController.cadastrar)
    .put("/autor/:id", AutorController.atualizar)
    .delete("/autor/:id", AutorController.excluir)

export default router;    