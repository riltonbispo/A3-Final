import multer from "multer";
import path from 'path'
import fs from 'fs';

const uploadFolderPath = path.resolve('uploads');
if (!fs.existsSync(uploadFolderPath)) {
  fs.mkdirSync(uploadFolderPath);
}

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve('uploads'));
  },
  filename: (req, file, cb) => {
    const time = new Date().getTime()
    cb(null, `${time}_${file.originalname}`);
  }
});
