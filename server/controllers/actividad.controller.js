import { db } from "../db.js";

export const getActividad = (req, res) => {
    const q =  "SELECT * FROM actividad;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};

export const createActividad = (req, res) => {
    const {act_nombre, act_descripcion} = req.body;
    const q = "INSERT INTO actividad (act_nombre, act_descripcion) VALUES ($1,$2)";
    const values = [act_nombre,act_descripcion];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Actividad creada");
    });
}

export const updateActividad = (req,res) => {
    const act_id = req.params.act_id;
    const {act_nombre,act_descripcion} = req.body;
    const q = "UPDATE actividad SET act_nombre=$1,act_descripcion=$2 WHERE act_id=$3";
    const values = [act_nombre,act_descripcion,act_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Actividad actualizada");
    });
}
export const deleteActividad = (req,res) => {
    const act_id = req.params.act_id;
    const q = "DELETE FROM actividad WHERE act_id=$1";
    const values = [act_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Actividad eliminada");
    }); 
}
