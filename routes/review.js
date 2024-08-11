const express = require("express")
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync")
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js")
const reviewController=require("../controller/reviews.js");
const review = require("../models/review.js");

// REVIEWS
// post route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports = router;