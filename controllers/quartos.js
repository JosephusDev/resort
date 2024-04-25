import {db} from "../db.js"

export const getQuartos = (_, res) => {
    const query = "SELECT * FROM quarto order by numero"

    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getVerDisponibilidade = (req, res) => {
    const query = "call ver_disponibilidade(?, ?)"

    const values = [
        req.body.data_in,
        req.body.data_out
    ]

    db.query(query, values, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getQuarto = (req, res) => {
    const query = "SELECT * FROM quarto where id = ?"

    db.query(query, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const adicionarQuarto = (req, res) => {
    const query = "insert into quarto(numero, tipo, descricao, preco, estado) values(?, ?, ?, ?, ?)"

    const values = [
        req.body.numero,
        req.body.tipo,
        req.body.descricao,
        req.body.preco,
        req.body.estado
    ]

    db.query(query, values, (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Quarto adicionado com sucesso.")
    })
}

export const editQuarto = (req, res) => {
    const query = "UPDATE quarto SET numero = ?, tipo = ?, descricao = ?, preco = ?, estado = ? WHERE id = ?"

    const values = [
        req.body.numero,
        req.body.tipo,
        req.body.descricao,
        req.body.preco,
        req.body.estado
    ]

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Quarto editado com sucesso.")
    })
}

export const elimQuarto = (req, res) => {
    const query = "delete from quarto WHERE id = ?"

    db.query(query, req.params.id, (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Quarto eliminado com sucesso.")
    })
}