import express from "express"
import { Logar, CriarConta } from "../controllers/usuario.js"

const router = express.Router()

router.post("/logar", Logar)

router.post("/criar", CriarConta)

export default router