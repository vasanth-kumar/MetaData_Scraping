const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const api = require("./api")
app.use("/",api)

const port = process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(`Server Listening on port ${port}`)
})
