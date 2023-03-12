const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/getData", (req, res)=>{
    console.log("1 Connection succesfull");
    res.json({msg : "hello"});
});
app.listen(8080, function() {
    console.log("Server started on port 8080");
  });