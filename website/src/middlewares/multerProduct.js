// ************ Require's ************

const multer = require('multer');

// ************ Multer ************
// module.exports = 
    // const dest = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         let dir = path.resolve(__dirname,"../../public/uploads","products", String(req.body.nombreProducto).trim().replace(/\s+/g, ''))
    //         if (!fs.existsSync(dir)){
    //             fs.mkdirSync(dir);
    //         }
    //         cb(null, dir)
    //     },
    //     filename: function (req, file, cb) {
    //         cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    //     }
    // })
    
    // const upload = multer({storage:dest});
    


