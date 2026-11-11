const express = require('express');
const { GetReviewList, CreateReview } = require('../../Controller/Admin/ReviewController');
const upload = require('../../multer');
const { CheckReviewEmailAddress } = require('../../MiddleWare/CheckReviewDuplicateEmail');
const ReviewRouter = express.Router();

ReviewRouter.get('/review-list/:id' , GetReviewList);
ReviewRouter.post('/review-create'  , 
    upload.fields(
        [
            {name: 'customerimage' , maxCount: 1},
            {name: 'productimage' , maxCount: 1}
        ]),CheckReviewEmailAddress, CreateReview);

module.exports=ReviewRouter