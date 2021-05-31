
const multer = require('multer')

const storage = multer.diskStorage({})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Wrong file format, make sure the image is either in .jpeg, .jpg or .png format'), false)
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('image')

module.exports = upload
