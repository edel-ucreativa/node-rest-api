const express = require('express');
const app = express();

const cors = require('cors');

//Routes
const Routes = require("./router");

// middlewares 
app.use(express.json());
app.use(cors());
app.use(Routes); // routers 

app.listen(3000, ()=>{
    console.log(`app runing on ${3000}`);
});

