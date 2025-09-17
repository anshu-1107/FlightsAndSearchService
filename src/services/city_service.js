const { CityRepository } = require("../repository/index")

class CityService{

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.CityRepository.createCity(data);
            return city;
        }catch(err){
            console.log("Something went wrong at servie layer");
            throw {err};
        }
    }

    async deleteCity(cityID){
        try{
            const response = await this.CityRepository.deleteCity(cityID);
            return response;
        }catch(err){
            console.log("Something went wrong at servie layer");
            throw {err};
        }
    }


    async updateCity(cityID, data){
        try{
            const city = await this.CityRepository.updateCity(cityID,data);
            return city;
        }catch(err){
            console.log("Something went wrong at servie layer");
            throw {err};
        }
    }

    async getCity(cityID){
        try{
            const city = await this.CityRepository.getCity(cityID);
            return city;
        }catch(err){
            console.log("Something went wrong at servie layer");
            throw {err};
        }
    }
}