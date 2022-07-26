const express = require('express')
require("dotenv").config()
const  db  = require('./models')
// const userinfo = require('./models/posting')


const app = express()
app.use(express.json())


const userController = require('./routes/user')
const postController = require('./routes/post')
const reviewpostController = require('./routes/reviewpost')
const PORT = process.env.PORT || 3001;

const env = process.env.NODE_ENV || "production";

const cors = require('cors');
app.use(cors());

app.use('/user',userController )
app.use('/post', postController)
app.use('/reviewpost', reviewpostController)






app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
