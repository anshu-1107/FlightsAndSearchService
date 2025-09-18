const crudRepository = require("./crud_repository")
const {Airport} = require("../models/index")

class AiportRepository extends crudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AiportRepository;