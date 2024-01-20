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
router.delete('/:id', (req, res) => {
    //pool access database
    const todoId = req.params.id;
    const queryText = `DELETE FROM "tasktable" WHERE "id" = $1;`;

    pool
        .query(queryText, [todoId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

// PUT
router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const queryText = `UPDATE "tasktable" SET "is_complete" = NOT "is_complete" WHERE "id" = $1;`;

    pool
        .query(queryText, [todoId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;
