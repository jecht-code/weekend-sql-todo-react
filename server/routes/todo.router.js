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

// PUT

// DELETE

module.exports = router;
