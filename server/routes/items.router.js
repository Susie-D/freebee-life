const express = require('express');
const router = express.Router({ mergeParams: true });
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

// get single item
router.get('/:id', (req, res) => {
    const queryItemById = `
        SELECT * FROM items
        WHERE id = $1
    `;
    pool.query(queryItemById, [req.params.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get item by id', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    const newItem = req.body;
    const addNewItem = `INSERT INTO "items"("headline", "item", "description", "delivery_method", "condition", "category", "upload_image", "estimated_value", "date_posted", "user_id")  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
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
        newItem.user_id,
    ];
    pool
        .query(addNewItem, queryValues)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST /api/new-item', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const itemIdToDelete = req.params.id;
    const deleteItemQuery = `
    DELETE FROM items
	    WHERE id = $1`;
    pool
        .query(deleteItemQuery, [itemIdToDelete])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('DELETE/api/', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    const editItem = req.body;
    console.log('EDIT', editItem);
    const itemIdToEdit = req.params.id;
    const editItemQuery = `
    UPDATE "items"
        SET
            "headline" = $1,
            "item" = $2
        WHERE "id" = $3;
    `;

    const queryValues = [
        editItem.headline,
        editItem.item,
        itemIdToEdit,
    ];
    pool
        .query(editItemQuery, queryValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`EDIT/api/`, err);
            res.sendStatus(500);
        });
});

module.exports = router;
