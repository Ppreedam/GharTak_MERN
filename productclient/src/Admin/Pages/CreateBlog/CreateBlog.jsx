import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./CreateBlog.module.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import axios from 'axios';

const initialdata = {
  title: "",
  metatag: "",
  imgurl: "",
  question1: "",
  answer1: "",
  question2: "",
  answer2: "",
  question3: "",
  answer3: "",
  question4: "",
  answer4: "",
  question5: "",
  answer5: "",
  question6: "",
  answer6: "",
  question7: "",
  answer7: "",
  question8: "",
  answer8: "",
  authorname:"",
}

export default function CreateBlog() {
  const [data, setData] = useState(initialdata)


  const handlechange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handlepost = () => {
    axios.post("https://ghartak.onrender.com/addblog", data)
      .then((res) => {
        alert(res.data.mess)
        // console.log(res.data.mess)
      })
      .catch((err) => {
        alert(err.data.mess)
      })

  }
  return (
    <>
      <div className={styles.blogparentbox}>

        <Stack direction="row" spacing={2}>
          <h1>Write a New Blog</h1>

          {/* <Button variant="contained" endIcon={<SendIcon />}>
            Save
          </Button> */}
          {/* <Button variant="outlined" endIcon={<SendIcon />}>
            Edit
          </Button> */}
          <Button variant="contained" endIcon={<SendIcon />} onClick={handlepost}>
            Post
          </Button>
          {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button> */}
        </Stack>
        <Box
          className={styles.textfieldbox}
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1,mb:"20px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="title"
              id="outlined-multiline-flexible"
              label="Title"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="metatag"
              id="outlined-multiline-flexible"
              label="MetaTag"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="imgurl"
              id="outlined-multiline-flexible"
              label="ImageUrl"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question1"
              id="outlined-multiline-flexible"
              label="Question 1"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer1"
              id="outlined-multiline-static"
              label="Answer1"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question2"
              id="outlined-multiline-flexible"
              label="Question 2"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer2"
              id="outlined-multiline-static"
              label="Answer2"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question3"
              id="outlined-multiline-flexible"
              label="Question 3"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer3"
              id="outlined-multiline-static"
              label="Answer3"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question4"
              id="outlined-multiline-flexible"
              label="Question 4"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer4"
              id="outlined-multiline-static"
              label="Answer4"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question5"
              id="outlined-multiline-flexible"
              label="Question 5"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer5"
              id="outlined-multiline-static"
              label="Answer5"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question6"
              id="outlined-multiline-flexible"
              label="Question 6"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer6"
              id="outlined-multiline-static"
              label="Answer6"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question7"
              id="outlined-multiline-flexible"
              label="Question 7"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer7"
              id="outlined-multiline-static"
              label="Answer7"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="question8"
              id="outlined-multiline-flexible"
              label="Question 8"
              multiline
              rows={2}
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="answer8"
              id="outlined-multiline-static"
              label="Answer8"
              multiline
              rows={10}
            // defaultValue="Default Value"
            />
            <TextField
              className={styles.textfield}
              onChange={(e) => handlechange(e)}
              name="authorname"
              id="outlined-multiline-flexible"
              label="Author Name"
              multiline
              rows={1}
            />
          </div>


        </Box>
      </div>
    </>
  );
}
