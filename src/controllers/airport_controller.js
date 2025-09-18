const {AirportService} = require("../services/index");
const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const result = await airportService.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created the Airport",
            data:result,
            error:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            error : error,
            message : "Unable to create the Airport"
        })
    }
}

const destroy = async (req,res)=>{
    try {
        const result = await airportService.destroy(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted the Airport",
            data:result,
            error:{}
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            error : error,
            message : "Unable to delete the Airport"
        })
    }
}

const get = async (req,res)=>{
    try {
        const result = await airportService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched the Airport",
            data:result,
            error:{}
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            error : error,
            message : "Unable to fetch the Airport"
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const result = await airportService.getAll(req.query);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched the Airports",
            data:result,
            error:{}
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            error : error,
            message : "Unable to fetch the Airports"
        })
    }
}

const update = async (req,res)=>{
    try {
        const result = await airportService.update(req.params.id,req.body);
        return res.status(200).json({
            success: true,
            message: "Successfully update the Airport",
            data:result,
            error:{}
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            error : error,
            message : "Unable to update the Airport"
        })
    }
}

module.exports ={
    create,
    destroy,
    get,
    getAll,
    update
}