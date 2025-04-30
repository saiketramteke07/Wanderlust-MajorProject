const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const multer= require('multer')
const {storage}=require("../cloudconfig.js");
const upload = multer({storage}) ;

//CONTROLLER
const listingController=require("../controllers/listing.js");


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));


//NEW ROUTE                                 
router.get("/new",isLoggedIn,listingController.renderNewForm);

//REQUEST in /listings/:id will be handled
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));



//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm)) 

module.exports=router