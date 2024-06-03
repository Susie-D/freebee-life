const express = require('express');
const router = express.Router({ mergeParams: true });
const pool = require('../modules/pool');
// const upload = require('../modules/multer')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        console.log('file', file)
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 999999999999999999999 }
})

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

router.post('/', upload.single('upload_image'), (req, res) => {
    console.log(req.file)
    const newItem = req.body;
    const addNewItem = `INSERT INTO "items"("headline", "item", "description", "delivery_method", "condition", "category", "upload_image", "estimated_value", "user_id")  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `;
    const queryValues = [
        newItem.headline,
        newItem.item,
        newItem.description,
        newItem.delivery_method,
        newItem.condition,
        newItem.category,
        // newItem.upload_image, 
        req.file.path,
        newItem.estimated_value,
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

router.put('/:id', upload.single('upload_image'), (req, res) => {
    console.log('EDDDIT', req.body)
    const editItem = req.body;
    console.log('EDIT', editItem);
    const itemIdToEdit = req.params.id;
    const editItemQuery = `
    UPDATE "items"
        SET
            "headline" = $1,
            "item" = $2,
            "category" = $3,
            "description" = $4,
            "delivery_method" = $5,
            "condition" = $6,
            "estimated_value" = $7,
            "color" = $8,
            "upload_image" = $9,
            "user_id" = $10
        WHERE "id" = $11;
    `;

    const queryValues = [
        editItem.headline,
        editItem.item,
        editItem.category,
        editItem.description,
        editItem.delivery_method,
        editItem.condition,
        editItem.estimated_value,
        editItem.color,
        req?.file?.path || editItem.upload_image,
        editItem.user_id,
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
