const express = require('express')
const app = express()
const mongoose=require('mongoose');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const user=require('./routes/users');
const auth=require('./routes/auth');
const logout=require('./routes/logout')
const multer = require("multer");

const port =process.env.port ||4000;
app.use(express.static('./uploads'))

app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    next();
  });


connectDB();
app.use(express.json())


//upload photo
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype ) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}


// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
  
}).single("photo");

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    console.log("image", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undifind");
      }
    }
  });
});

//uploadvideo
const storageVideo = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


// Check File Type
function checkVideoType(file, cb) {
  // Allowed ext
  const filetypes = /mp4|avi/;
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype ) {
    return cb(null, true);
  } else {
    cb("Error: Videos Only!");
  }
}


// Init Upload
const uploadVideo = multer({
  storage: storageVideo,
  limits: { fileSize: 30000000000 },
  fileFilter: function (req, file, cb) {
    checkVideoType(file, cb);
  }
  
}).single("video");

app.post("/video", (req, res) => {
  uploadVideo(req, res, (err) => {
    console.log("video", req.file);
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: "Error: No File Selected!" });
      } else {
        if (req.file) res.send(req.file.filename);
        else res.send("file undifind");
      }
    }
  });
});

app.use("/dogsLovers/users",user)
app.use("/dogsLovers/login",auth)
app.use("/dogsLovers/logout",logout)




 
app.listen(port,()=>console.log("connecté sur http://localhost:"+port+"/"));


