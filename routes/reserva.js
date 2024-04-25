import express from "express"
import { addReserva, getReservasCliente, elimReserva, getReservas, confirmarReserva } from "../controllers/reserva.js"

const router = express.Router()

router.post("/", addReserva)

router.get("/cliente/:id", getReservasCliente)

router.put("/confirmar/:id", confirmarReserva)

router.get("/all/", getReservas)

router.delete("/:id", elimReserva)

export default router