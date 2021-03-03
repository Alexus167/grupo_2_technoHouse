const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/avatares')
    },
    filename: (req, file, cb) => {
      cb(null,'avatar-' + Date.now() + path.extname(file.originalname))
   },
  });
  const upload = multer({storage});
  
  module.exports = upload; 