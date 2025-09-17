const express = require("express")
const {PORT} = require("./config/serverConfig")

const setup_and_start_server = async ()=>{

    // create the express object
    const app = express()
    app.listen(PORT,()=>console.log(`Server started at port: ${PORT}`))
}

setup_and_start_server()