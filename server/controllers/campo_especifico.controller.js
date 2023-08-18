import { db } from "../db.js";

export const getCampoEspecifico= (req, res) => {
    const q =  "SELECT * FROM campo_especifico;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};
export const createCampoEspecifico = (req, res) => {
    const {ce_nombre, ce_descripcion,ca_id} = req.body;
    const q = "INSERT INTO campo_especifico (ce_nombre, ce_descripcion,ca_id) VALUES ($1,$2,$3)";
    const values = [ce_nombre,ce_descripcion,ca_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo específico creado");
    });
}

export const updateCampoEspecifico = (req,res) => {
    const ce_id = req.params.ca_id;
    const {ce_nombre,ce_descripcion,ca_id} = req.body;
    const q = "UPDATE campo_especifico SET ce_nombre=$1,ce_descripcion=$2,ca_id=$3 WHERE ce_id=$4";
    const values = [ce_nombre,ce_descripcion,ca_id,ce_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo específico actualizado");
    });
}
export const deleteCampoEspecífico = (req,res) => {
    const ce_id = req.params.ce_id;
    const q = "DELETE FROM campo_especifico WHERE ce_id=$1";
    const values = [ce_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Campo específico eliminado");
    }); 
}
