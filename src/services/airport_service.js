const crudService = require("./crud_service")
const {AirportRepository} = require("../repository/index")

class AirportService extends crudService{
    constructor(){
        const airportRepo = new AirportRepository();
        super(airportRepo);
    }
}

module.exports = AirportService;