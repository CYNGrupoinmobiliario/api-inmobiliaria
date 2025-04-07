const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las propiedades
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM propiedades');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener propiedades' });
  }
});

// Obtener una propiedad por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM propiedades WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener propiedad por ID:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;
