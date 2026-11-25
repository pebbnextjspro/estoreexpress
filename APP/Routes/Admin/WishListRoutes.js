const express = require('express');
const { CreateWishList, GetWishListIDS, DeleteWishList, CreateWishListNext, WishlistQty, GetWishListIDSNext, WishTableItems, WishDeleteNext } = require('../../Controller/Admin/WishListController');
const { CheckProductId } = require('../../MiddleWare/CheckProductId');
const { CheckWishItemExist } = require('../../MiddleWare/CheckWishlistNext');
const WishListRoutes = express.Router();

WishListRoutes.post('/wishlist-create' ,CheckProductId, CreateWishList);
WishListRoutes.get('/wishlist-list/:id' , GetWishListIDS);
WishListRoutes.get('/wishlist-listnext/:id' , GetWishListIDSNext);
WishListRoutes.post('/wishlist-delete' , DeleteWishList);
WishListRoutes.post('/wishlist-createnext' ,CheckWishItemExist, CreateWishListNext);
WishListRoutes.get('/wishlist-qty/:id' , WishlistQty);
WishListRoutes.get('/table-list/:id' , WishTableItems);
WishListRoutes.post('/wishlist-deletenext/:productid/:userid' , WishDeleteNext);


module.exports = WishListRoutes