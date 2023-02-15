import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('pdf', file);

    axios.post('http://localhost:3000/pdf', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  console.log(file)
  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default App;





// const express = require('express');
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.raw({ type: 'application/pdf' }));

// // Route to receive and store the PDF file
// app.post('/pdf', (req, res) => {
//     // Connect to MongoDB
//     MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, (err, client) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(err);
//             return;
//         }
//         const db = client.db('test');

//         // Store the PDF file in MongoDB using GridFS
//         const bucket = new mongodb.GridFSBucket(db);
//         const uploadStream = bucket.openUploadStream('document.pdf');
//         uploadStream.write(req.body);
//         uploadStream.end();

//         console.log('PDF file stored in MongoDB');

//         // Close the connection to MongoDB
//         client.close();

//         res.status(200).send('PDF file stored in MongoDB');
//     });
// });

// // Start the Express app
// app.listen(3000, () => {
//     console.log('App listening on port 3000');
// });
