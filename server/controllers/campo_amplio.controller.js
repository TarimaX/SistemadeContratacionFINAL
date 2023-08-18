import { db } from "../db.js";

export const getCampoAmplio = (req, res) => {
    const q =  "SELECT * FROM campo_amplio;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};
export const createCampoAmplio = (req, res) => {
    const {ca_nombre, ca_descripcion} = req.body;
    const q = "INSERT INTO campo_amplio (ca_nombre, ca_descripcion) VALUES ($1,$2)";
    const values = [ca_nombre,ca_descripcion];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo amplio creado");
    });
}

export const updateCampoAmplio = (req,res) => {
    const ca_id = req.params.ca_id;
    const {ca_nombre,ca_descripcion} = req.body;
    const q = "UPDATE campo_amplio SET ca_nombre=$1,ca_descripcion=$2 WHERE ca_id=$3";
    const values = [ca_nombre,ca_descripcion,ca_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo amplio actualizado");
    });
}
export const deleteCampoAmplio = (req,res) => {
    const ca_id = req.params.ca_id;
    const q = "DELETE FROM campo_amplio WHERE ca_id=$1";
    const values = [ca_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo amplio eliminado");
    }); 
}
