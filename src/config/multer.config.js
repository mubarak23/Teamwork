const multer = require('multer');
const DataUri = require('datauri');
const storage = multer.memoryStorage();

const multerUplaod = multer({ storage }).single('gif');
const dUri = new DataUri();

const dataUri = (req) =>{
    const uri = dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
    return uri;
}

module.exports = { multerUplaod, dataUri };
