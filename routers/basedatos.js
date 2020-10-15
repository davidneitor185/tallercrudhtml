const { Pool } = require('pg');
const Router = require('express-promise-router');
const keys = require('../config/keys');


const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.post('/insertarpaciente', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  console.log(req.body)
  await pool.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`
  );
  res.json({ 'RES': 'INSERTADO' });
});


router.put('/editarpaciente', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    'UPDATE pacientes SET nombre = $1, apellido = $2  WHERE numid = $3', [nombre, apellido, numid]
  );
  res.json({'RES': 'EDITADO'});
});

router.delete('/borrarpaciente', async (req, res) => {
  const numid = req.body;
  await pool.query(
    'DELETE FROM pacientes where numid = $1',[numid.numid]
  );
  res.json({'RES': `User ${numid.numid} deleted Successfully`});
});

router.get('/consultatotalpacientes', async (req, res) => {

  const { rows } = await pool.query('SELECT * FROM pacientes');
  res.json(rows);
});