const express = require("express");
const router = express.Router();
const {getContact,createContact,getIdContact,putContact,deleteContact} = require("../controllers/contactControllers");

router.route("/").get(getContact).post(createContact);
/*router.route("/").post(createContact);//since almost same */
router.route("/:id").get(getIdContact).put(putContact).delete(deleteContact);

module.exports =router;
