import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
// path.extname gets the file extionsion on the file and adds it to the filename

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); //boolean
  const mimetype = filetypes.test(file.mimetype); //boolean

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
};

// customize to allow users to upload only images
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

// we can allow multiple image uploads but here we're going with "single"
// route is configured with that middleware
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
