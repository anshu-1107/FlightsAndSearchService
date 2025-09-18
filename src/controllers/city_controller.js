const {CityService} = require("../services/index.js")

const cityService = new CityService();

// POST : /city
const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city!",
            error : error
        })
    }
}

// DELETE : /city/:id
const destroy = async (req,res)=>{
    try {
        const result = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data : result,
            success : true,
            message : "Successfully deleted a city!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city!",
            error : error
        })
    }
}

// GET: /city/:id
const get = async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully fetched the city!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get the city!",
            error : error
        })
    }
}

// PATCH : /city/:id -> req body
const update = async (req,res)=>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body)
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully updated the city!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city!",
            error : error
        })
    }
}


const getAll = async (req,res)=>{ 
    try {
        const cities = await cityService.getAllCities()
        return res.status(200).json({
            data : cities,
            success : true,
            message : "Successfully updated the city!",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get the Cities!",
            error : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}