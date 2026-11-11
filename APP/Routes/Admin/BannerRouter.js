const express = require('express');
const { CreateBanner, GetBanner, UpdateBanner, DeleteBanner, GetBannerBySingle, GetBannerBySmall } = require('../../Controller/Admin/BannerController');
const upload = require('../../multer');
const BannerRoutes = express.Router();


BannerRoutes.post('/banner-create' ,upload.single('image'),  CreateBanner);
BannerRoutes.get('/banner-list' , GetBanner);
BannerRoutes.put('/banner-update/:id' , upload.single('image'),  UpdateBanner);
BannerRoutes.delete('/banner-delete' , DeleteBanner);
BannerRoutes.get('/banner-listbysingle' , GetBannerBySingle);
BannerRoutes.get('/banner-listbysmall' , GetBannerBySmall);


module.exports = BannerRoutes

