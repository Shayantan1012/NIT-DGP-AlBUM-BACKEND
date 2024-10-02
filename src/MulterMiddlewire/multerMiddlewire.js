const multer = require('multer');
const path = require('path');


const storageConfiguration = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, 'uploads/');
    },
    filename: (req, file, next) => {
        console.log(file);  // Log file to check its properties
        next(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const uploader = multer({storage: storageConfiguration});

module.exports = uploader;

