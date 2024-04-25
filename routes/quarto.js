import express from "express"
import { getQuartos, editQuarto, getQuarto, getVerDisponibilidade, elimQuarto, adicionarQuarto } from "../controllers/quartos.js"

const router = express.Router()

router.get("/", getQuartos)

router.post("/", adicionarQuarto)

router.get("/:id", getQuarto)

router.put("/:id", editQuarto)

router.delete("/:id", elimQuarto)

router.post("/ver_disponibilidade", getVerDisponibilidade)

export default router