import { db } from "../db.js";

export const getItem = (req, res) => {
    const q =  "SELECT * FROM item;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};
export const createItem = (req, res) => {
    const {pa_id, it_nombre} = req.body;
    const q = "INSERT INTO item (pa_id,it_nombre ) VALUES ($1,$2)";
    const values = [pa_id,it_nombre];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Item creado");
    });
}

export const updateItem = (req,res) => {
    const it_id = req.params.it_id;
    const {it_nombre,pa_id} = req.body;
    const q = "UPDATE item SET pa_id=$1,it_nombre=$2 WHERE it_id=$3";
    const values = [pa_id,it_nombre,it_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Item actualizado");
    });
}
export const deleteItem = (req,res) => {
    const it_id = req.params.it_id;
    const q = "DELETE FROM item WHERE it_id=$1";
    const values = [it_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Item eliminado");
    }); 
}
