import { db } from "../db.js";

export const getContratacion = (req, res) => {
    const q =  "SELECT * FROM contratacion;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};
export const createContratacion = (req, res) => {
    const {con_nombre} = req.body;
    const q = "INSERT INTO contratacion (con_nombre) VALUES ($1)";
    const values = [con_nombre];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Contratación creada");
    });
}

export const updateContratacion = (req,res) => {
    const con_id = req.params.con_id;
    const {con_nombre} = req.body;
    const q = "UPDATE contratacion SET con_nombre=$1 WHERE con_id=$2";
    const values = [con_nombre,con_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Contatación actualizada");
    });
}
export const deleteContratacion = (req,res) => {
    const con_id = req.params.con_id;
    const q = "DELETE FROM contratacion WHERE con_id=$1";
    const values = [con_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Contratación eliminada");
    }); 
}
