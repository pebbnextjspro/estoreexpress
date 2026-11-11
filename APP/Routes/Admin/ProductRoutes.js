const express = require('express');
const ProductRoutes = express.Router();

// Import controller functions
const { ProductList, ProductDelete, ProductByPrice, ProductCreate, ProductUpdate, ProductCreate2, 
    GetImages, UploadImage, ListColorFilter, ProductListByColor, ListBrandFilter, ProductListByCategory, 
    ProdcutListByColorandPrice, 
    ProductListByBrand,
    ListSubCategoryFilter,
    ProdcutListBySubCategory,
    ProdcutListBySubCategoryandPrice,
    ListRatingFilter,
    ProductListByRating,
    CheckQty,
    UpdateQty,
    UpdateQtyMinus,
    GetListById,
    UpdateMainImage,
    GetColor} = require('../../Controller/Admin/ProductController');
const upload = require('../../multer');
const { CheckDuplicateName } = require('../../MiddleWare/CheckProductName');
const { CheckProductQty } = require('../../MiddleWare/CheckProductQty');

// Define routes
ProductRoutes.get('/product-list', ProductList);
ProductRoutes.delete('/product-delete/:id' , ProductDelete);
ProductRoutes.get('/product-listbyprice/:priceone/:pricetwo/:category' , ProductByPrice);
ProductRoutes.post('/product-create', upload.fields([{name: "images" , maxCount:  6},
    {name: "singleimage" , maxCount: 1}]), CheckDuplicateName , ProductCreate);
ProductRoutes.post('/product-create2' , upload.array("images" , 6) , ProductCreate2);
ProductRoutes.put('/product-update/:id' , ProductUpdate);
ProductRoutes.get('/product-listimages/:id' , GetImages);
ProductRoutes.post('/product-upload' ,upload.array("images") , UploadImage);
ProductRoutes.get('/product-colorlist/:categoryid' , ListColorFilter);
ProductRoutes.get('/product-listbycolor/:categoryid/:productcolor', ProductListByColor);
ProductRoutes.get('/product-listbybrand/:categoryid' , ListBrandFilter);
ProductRoutes.get('/product-listbycategory/:categoryid' , ProductListByCategory);
ProductRoutes.get('/product-listbycolorprice/:categoryid/:color/:minprice/:maxprice' , ProdcutListByColorandPrice);
ProductRoutes.get('/product-listbycatbrands/:categoryid/:brandid' , ProductListByBrand);
ProductRoutes.get('/product-listsubcategoryfilter/:categoryid' , ListSubCategoryFilter);
ProductRoutes.get('/product-listbysubcategory/:categoryid/:subcategoryid' , ProdcutListBySubCategory);
ProductRoutes.get('/product-listbysubcatprice/:categoryid/:subcategoryid/:minprice/:maxprice' , ProdcutListBySubCategoryandPrice);
ProductRoutes.get('/product-listbyratingfilter/:categoryid' , ListRatingFilter);
ProductRoutes.get('/product-listbyrating/:categoryid/:rating' , ProductListByRating);
ProductRoutes.put('/product-updateqty/:qty/:id' ,CheckProductQty, UpdateQty);
ProductRoutes.put('/product-updateqtyminus/:qty/:id', UpdateQtyMinus);
ProductRoutes.get('/product-listbyid/:id' , GetListById);
ProductRoutes.put('/product-singleimage/:id' , upload.single('image') , UpdateMainImage);
ProductRoutes.get('/product-getcolorcat/:id' , GetColor);

module.exports = ProductRoutes; 
