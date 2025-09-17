const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");

const setup_and_start_server = async ()=>{

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>console.log(`Server started at port: ${PORT}`));
}

setup_and_start_server();