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

module.exports = router;
