const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const allItemsQueryByDate = `
        SELECT * FROM "items"
        ORDER BY "date_posted" DESC;
  `;
    pool.query(allItemsQueryByDate)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all items', err);
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
    const queryItemById = `
        SELECT * FROM items
        WHERE id = ${req.params.id}
    `;
    pool.query(queryItemById)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get item by id', err);
            res.sendStatus(500);
        })
})

module.exports = router;
