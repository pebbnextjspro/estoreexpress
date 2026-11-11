let express = require('express');
const { CategoryList, CategoryDelete, CategoryCustom, CreateCategory, UpdateCategory } = require('../../Controller/Admin/CategoryController');
const upload = require('../../multer');
const { CheckCategoryName } = require('../../MiddleWare/CheckCategoryName');
const CategoryRoutes = express.Router();

CategoryRoutes.get('/category-list' , CategoryList);
CategoryRoutes.delete('/category-delete/:id' , CategoryDelete);
CategoryRoutes.get('/category-custom' , CategoryCustom);
CategoryRoutes.post('/category-create' ,upload.single("image"), CheckCategoryName,CreateCategory);
CategoryRoutes.put('/category-update/:id' , upload.single("image") , UpdateCategory);

module.exports = CategoryRoutes