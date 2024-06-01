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

module.exports = upload;
