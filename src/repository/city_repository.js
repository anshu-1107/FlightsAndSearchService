const { where, Op } = require("sequelize");
const { City } = require("../models/index")

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(err){
            console.log("Something went wrong in the repositoy layer");
            throw {err};
        }
    }


    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    async updateCity(cityId,data){

        try{
            // const city = await City.update(data,
                // {
                //     where:{
                //         id:cityId
                //     },
                //     returning:true,       only supported in Postgres SQL
                //     plain:true            only supported in Postgres SQL
                // }); 
                
                const city = await City.findByPk(cityId);
                city.name = data.name;
                await city.save();
                return city;

        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }

    }

    async getCity(cityId){

        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    async getAllCities(filter){  // filter can be empty also, if filter empty fetch all
                                 // else fetch the cities which starts with filter
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name :{
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

}

module.exports = CityRepository
