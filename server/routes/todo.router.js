const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM tasktable ORDER BY task DESC;';
    pool
        .query(sqlText)
        .then((result) => {
            console.log('get result', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making DB query ${sqlText}`, error);
            res.sendStatus(500); // good server always responds
        });
});
// POST
router.post('/', (req, res) => {
    const todo = req.body;
    const sqlText = `INSERT INTO "tasktable" ("task", "is_complete") VALUES ($1, $2)`;
    pool
        .query(sqlText, [todo.task, todo.is_complete])
        .then((result) => {
            console.log('add task', todo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making DB query ${sqlText}`, error);
            res.sendStatus(500); // good server always responds
        });
});

// DELETE

// PUT

module.exports = router;
