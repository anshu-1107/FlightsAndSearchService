const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index')

const CityRepository = require("./repository/city_repository")
const sequelize = require("sequelize")
const db = require("./models/index")

const setup_and_start_server = async ()=>{

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started at port: ${PORT}`);
        if(process.env.DB_SYNC==true)
        {
            db.sequelize.sync({alter:true});
        }

    });
}

setup_and_start_server();