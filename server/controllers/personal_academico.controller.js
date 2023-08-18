import { db } from "../db.js";

export const getPersonalAcademico = (req, res) => {
  const q = "SELECT * FROM personal_academico;";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data.rows);
  });
};

export const createPersonalAcademico = (req, res) => {
  const { pa_id, pa_nombre, pa_descripcion } = req.body;
  const q = `
        INSERT INTO personal_academico (pa_id, pa_nombre, pa_descripcion)
        VALUES ($1, $2, $3);
    `;
  const values = [pa_id, pa_nombre, pa_descripcion];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send("Personal académico creado exitosamente.");
  });
};

export const updatePersonalAcademico = (req, res) => {
  const pa_id = req.params.id;
  const { pa_nombre, pa_descripcion } = req.body;
  const q = `
        UPDATE personal_academico
        SET pa_nombre = $1, pa_descripcion = $2
        WHERE pa_id = $3;
    `;
  const values = [pa_nombre, pa_descripcion, pa_id];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send("Personal académico actualizado exitosamente.");
  });
};

export const deletePersonalAcademico = (req, res) => {
  const pa_id = req.params.id;
  const q = `
        DELETE FROM personal_academico
        WHERE pa_id = $1;
    `;
  const values = [pa_id];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send("Personal académico eliminado exitosamente.");
  });
};
