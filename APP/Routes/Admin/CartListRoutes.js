const express = require('express');
const { CreateCartList, GetCartID, DeleteCart, GetCartItems, CartDelete, GetTotalQty, CreateCartListMinus, DeleteAll, CartQty, SingleItemQty } = require('../../Controller/Admin/CartController');
const { CheckProductQty2, CheckProductQty3 } = require('../../MiddleWare/CheckProductQty');
const CartListRoutes = express.Router();

CartListRoutes.post('/cart-create', CheckProductQty2 , CreateCartList);
CartListRoutes.post('/cart-createminus' , CreateCartListMinus);
CartListRoutes.post('/cart-create2', CheckProductQty3 , CreateCartList);
CartListRoutes.get('/cart-list/:id' , GetCartID);
CartListRoutes.post('/cart-delete' , DeleteCart);
CartListRoutes.get('/cart-items/:id' , GetCartItems);
CartListRoutes.post('/cart-deleteone' , CartDelete);
CartListRoutes.get('/totalqty/:productid/:userid' , GetTotalQty);
CartListRoutes.get('/cart-qty/:id' , CartQty);
CartListRoutes.get('/singleitem-qty/:id/:productid' , SingleItemQty);

module.exports = CartListRoutes