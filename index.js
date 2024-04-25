import express from "express"
import cors from "cors"
import quartosRoutes from "./routes/quarto.js"
import reservasRoutes from "./routes/reserva.js"
import usuariosRoutes from './routes/usuario.js'
import funcionarioRoutes from './routes/funcionario.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", quartosRoutes)
app.use("/reserva/", reservasRoutes)
app.use("/usuarios/", usuariosRoutes)
app.use("/funcionarios/", funcionarioRoutes)


app.listen(8800)

console.log("Servidor rodando em: http://localhost:8800")