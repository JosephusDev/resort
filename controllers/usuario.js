import {db} from "../db.js"


export const Logar = (req, res) => {
    const query = "select * from cliente where login = ? and senha = ?"

    const values = [
        req.body.usuario,
        req.body.senha
    ]

    db.query(query, values, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const CriarConta = (req, res) => {
    const query = "insert into cliente(nome, login, senha, telefone) values(?, ?, ?, ?)"

    const values = [
        req.body.nome,
        req.body.usuario,
        req.body.senha,
        req.body.telefone
    ]

    db.query(query, values, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}