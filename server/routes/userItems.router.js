const express = require('express');
const router = express.Router({mergeParams:true});
const pool = require('../modules/pool');

// get route for items tied to user
router.get('/', (req, res) => {
    const allItemsQueryByUserId = `
        SELECT * FROM "items"
        WHERE "user_id" = $1
        ORDER BY "date_posted" DESC
    `;
    pool
        .query(allItemsQueryByUserId, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error: Get items by user', err);
            res.sendStatus(500);
        });
});

module.exports = router;
