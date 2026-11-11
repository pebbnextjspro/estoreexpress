let express = require('express');
const { BrandList, BrandDelete, BrandCreate, BrandUpdate } = require('../../Controller/Admin/BrandsController');
const upload = require('../../multer');
const BrandsRoutes = express.Router();

BrandsRoutes.get('/brand-list' , BrandList);
BrandsRoutes.delete('/brand-delete/:id' , BrandDelete);
BrandsRoutes.post('/brand-create',upload.single("image"), BrandCreate);
BrandsRoutes.put('/brand-update/:id' , upload.single("image") , BrandUpdate);

module.exports = BrandsRoutes
