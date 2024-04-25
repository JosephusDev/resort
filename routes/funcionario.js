import express from "express"
import { Logar } from "../controllers/funcionario.js"

const router = express.Router()

router.post("/logar", Logar)

export default router