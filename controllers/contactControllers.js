const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@description Get all contacts
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async(request,response) =>{
    const contacts = await Contact.find({user_Id: request.user.id});
    response.status(200).json(contacts);
});

//@description Create contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async(request,response) =>{
    console.log("The request body is:",request.body);
    const {name,email,phone} = request.body;
    if(!name || !email || !phone)
    {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_Id: request.user.id,
    });

    response.status(201).json(contact);
});

//@description Get contact by id
//@route GET /api/contacts/:id
//@access private
const getIdContact = asyncHandler(async(request,response) =>{
    const contact = await Contact.findById(request.params.id);
    if(!contact)
    {
        response.status(404);
        throw new Error("Contact Not Found");
    }
    response.status(201).json(contact);
});

//@description Create contact by id
//@route PUT /api/contacts/:id
//@access private
const putContact = asyncHandler(async(request,response) =>{
    const contact = await Contact.findById(request.params.id);
    if(!contact)
    {
        response.status(404);
        throw new Error("Contact Not Found");
    }

    if(contact.user_Id.toString() != request.user.id)
    {
        response.status(403);
        throw new Error("User don't have permission to update other user's contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(request.params.id,
        request.body,
        {new: true}
        );
    response.status(201).json(updatedContact);
});

//@description Delete contact by id
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(request,response) =>{
    const contact = await Contact.findById(request.params.id);
    if(!contact)
    {
        response.status(404);
        throw new Error("Contact Not Found");
    }
    if(contact.user_Id.toString() != request.user.id)
    {
        response.status(403);
        throw new Error("User don't have permission to update other user's contact");
    }
    await Contact.deleteOne({_id: request.params.id});
    response.status(201).json(contact);
});

module.exports = {getContact, createContact, getIdContact, putContact, deleteContact};