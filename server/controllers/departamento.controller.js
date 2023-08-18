import { db } from "../db.js";

export const getDepartamento = (req, res) => {
    const q =  "SELECT * FROM departamento;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data.rows);
    });
};
export const createDepartamento = (req, res) => {
    const {dept_nombre,dept_descripcion} = req.body;
    const q = "INSERT INTO departamento (dept_nombre,dept_descripcion) VALUES ($1,$2)";
    const values = [dept_nombre,dept_descripcion];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Departamento creado");
    });
}

export const updateDepartamento = (req,res) => {
    const dept_id = req.params.dept_id;
    const {dept_nombre,dept_descripcion} = req.body;
    const q = "UPDATE departamento SET dept_nombre=$1,dept_descripcion=$2 WHERE dept_id=$3";
    const values = [dept_nombre,dept_descripcion,dept_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Departamento actualizado");
    });
}
export const deleteDepartamento = (req,res) => {
    const dept_id = req.params.dept_id;
    const q = "DELETE FROM departamento WHERE dept_id=$1";
    const values = [dept_id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Departamento eliminado");
    }); 
}
