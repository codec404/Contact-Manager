const constants = require("../constants.js");
const erroHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode?res.statusCode:500;
    switch(statusCode){
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",message: err.message,stackTrace: err.stack
            });
            break;
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed",message: err.message,stackTrace: err.stack});
            break;
    }
    res.json({title:"Not Found",message: err.message,stackTrace: err.stack});
    res.json({title:"Validation Failed",message: err.message,stackTrace: err.stack});
};

module.exports = erroHandler;