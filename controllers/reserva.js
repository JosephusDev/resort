import {db} from "../db.js"


export const addReserva = (req, res) => {
    const query = "insert into reserva(data_out, data_in, id_cliente, id_funcionario, id_quarto) values(?, ?, ?, ?, ?)"

    const values = [
        req.body.data_out,
        req.body.data_in,
        req.body.id_cliente,
        req.body.id_funcionario,
        req.body.id_quarto,
    ]

    db.query(query, values, (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Reserva enviada com sucesso.")
    })
}

export const getReservasCliente = (req, res) => {
    const query = "select * from ver_reservas where id_cliente = ? order by id_reserva"

    db.query(query, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const elimReserva = (req, res) => {
    const query = "delete from reserva where id = ?"

    db.query(query, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const confirmarReserva = (req, res) => {
    const query = "update reserva set estado = 'confirmada' where id = ?"

    db.query(query, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getReservas = (req, res) => {
    const query = "select * from ver_reservas order by cliente"

    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}