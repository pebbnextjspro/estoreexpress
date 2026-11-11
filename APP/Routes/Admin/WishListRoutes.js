const express = require('express');
const { CreateWishList, GetWishListIDS, DeleteWishList } = require('../../Controller/Admin/WishListController');
const { CheckProductId } = require('../../MiddleWare/CheckProductId');
const WishListRoutes = express.Router();

WishListRoutes.post('/wishlist-create' ,CheckProductId, CreateWishList);
WishListRoutes.get('/wishlist-list/:id' , GetWishListIDS);
WishListRoutes.post('/wishlist-delete' , DeleteWishList);


module.exports = WishListRoutes