const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");

//CONTROLLER
const reviewController=require("../controllers/review.js");


//POST REVIEWS ROUTE
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
 
 //DELETE REVIEW ROUTE
 router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));
 
 module.exports=router;