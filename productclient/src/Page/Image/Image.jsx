// const imageSchema = new mongoose.Schema({
//     name: String,
//     data: Buffer,
//     contentType: String
//   });
//   const Image = mongoose.model('Image', imageSchema);
  

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });
// const upload = multer({ storage });
// const upload = multer({ dest: 'uploads/' });

// app.post('/upload', upload.single('image'), (req, res) => {
    // Perform additional processing on the uploaded files here
    // const newImage = new Image({
    //     name: req.file.originalname,
    //     data: req.file.buffer,
    //     contentType: req.file.mimetype
    //   });

    //   newImage.save((err) => {
    //     if (err) {
    //       res.send(err);
    //     } else {
    //       res.send('Image saved to database');
    //     }
    //   });
      
      
    // res.send('Successfully uploaded files!');
    
//   });

// import React from 'react'
// import "./image.css"

// const Image = () => {
//   return (
//     <div className='card'>hello

//     </div>
//   )
// }

// export default Image