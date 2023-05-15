const asyncHandler = require("express-async-handler");
//@description Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async(request,response) =>{
    response.status(200).json({message: "Get All contacts"});
});

//@description Create contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(request,response) =>{
    console.log("The request body is:",request.body);
    const {name,email,phone} = request.body;
    if(!name || !email || !phone)
    {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    response.status(201).json({message: "Create Contact"});
});

//@description Get contact by id
//@route GET /api/contacts/:id
//@access public
const getIdContact = asyncHandler(async(request,response) =>{
    response.status(201).json({message: `Get contact for ${request.params.id}`});
});

//@description Create contact by id
//@route PUT /api/contacts/:id
//@access public
const putContact = asyncHandler(async(request,response) =>{
    response.status(201).json({message: `Create contact for ${request.params.id}`});
});

//@description Delete contact by id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(request,response) =>{
    response.status(201).json({message: `Delete contact for ${request.params.id}`});
});

module.exports = {getContact, createContact, getIdContact, putContact, deleteContact};