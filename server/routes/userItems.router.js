const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newItem = req.body;
    const addNewItem =
        `INSERT INTO "items"("headline", "item", "description", "delivery_method", "condition", "category", "upload_image", "estimated_value", "date_posted", "user_id")  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
    `;
    const queryValues = [
        newItem.headline,
        newItem.item,
        newItem.description,
        newItem.delivery_method,
        newItem.condition,
        newItem.category,
        newItem.upload_image,
        newItem.estimated_value,
        newItem.date_posted,
        newItem.user_id
    ];
    pool.query(addNewItem, queryValues)
        .then((result) => { res.sendStatus(201) })
        .catch((err) => {
            console.log('Error in POST /api/new-item', err);
            res.sendStatus(500);
        })
})

module.exports = router;