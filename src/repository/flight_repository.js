const {Flight} = require("../models/index")
const { Op } = require('sequelize');

class FlightRepository{

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        // in below two filter both with not work simultaneously, only the 2nd one will work
        // if(data.minPrice){
        //     Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        // }
        // if(data.maxPrice){
        //     Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        // }

        if(data.minPrice && data.maxPrice)
        {
            Object.assign(filter,{
                    price:
                    {[Op.and]:[
                        {[Op.gte]:data.minPrice},
                        {[Op.lte]:data.maxPrice} 
                    ]}
            })
        }
        else if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }
        else if(data.maxPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }

        return filter;
    }

    async createFlight(data){
        try {
            const flight = Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            console.log(error);
        }
    }

    async getFlight(flightId)
    {
        try {
            const flight = Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            console.log(error);
        }
    }

    async getAllFlights(filter)
    {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            console.log(error);
        }
    }

}

module.exports = FlightRepository;