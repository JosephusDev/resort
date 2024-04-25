import {db} from "../db.js"


export const Logar = (req, res) => {
    const query = "select * from funcionario where login = ? and senha = ?"

    const values = [
        req.body.usuario,
        req.body.senha
    ]

    db.query(query, values, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}