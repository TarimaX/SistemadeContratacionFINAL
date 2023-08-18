import mongoose from "mongoose";
import Grid from "gridfs-stream";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: req.body.idDocument,
        bucketName: "uploads",
        metadata: {
          idPostulation: req.body.idPostulation,
        },
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

export const uploadPdf = (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(201).send(req.file);
  });
};
