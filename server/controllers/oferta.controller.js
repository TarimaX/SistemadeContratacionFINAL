import { db } from "../db.js";

export const getOferta = (req, res) => {
  const q = "SELECT * FROM oferta;";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data.rows);
  });
};
export const createOferta = (req, res) => {
  const {
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
  } = req.body;
  const q = `
        INSERT INTO oferta (post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
    `;
  const values = [
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(201).json(data.rows[0]);
  });
};

export const updateOferta = (req, res) => {
  const ofe_id = req.params.id;
  const {
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
  } = req.body;
  const q = `
        UPDATE oferta
        SET post_id = $1, con_id = $2, ce_id = $3, ca_id = $4, sede_id = $5, dept_id = $6, pa_id = $7, act_id = $8, ofe_vacantes = $9, ofe_horas = $10
        WHERE ofe_id = $11
        RETURNING *;
    `;
  const values = [
    post_id,
    con_id,
    ce_id,
    ca_id,
    sede_id,
    dept_id,
    pa_id,
    act_id,
    ofe_vacantes,
    ofe_horas,
    ofe_id,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data.rows[0]);
  });
};

export const deleteOferta = (req, res) => {
  const ofe_id = req.params.id;
  const q = `
        DELETE FROM oferta
        WHERE ofe_id = $1
        RETURNING *;
    `;

  db.query(q, [ofe_id], (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.rows.length === 0)
      return res.status(404).send("Oferta no encontrada");
    return res.status(200).json(data.rows[0]);
  });
};
