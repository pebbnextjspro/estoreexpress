const express = require('express');
const { SubcategoryList, SubCategoryDelete, Subcatlistbycatid, CreateSubCategory, UpdateSubCategory, OnlySubcategory } = require('../../Controller/Admin/SubCategoryController');
const { CheckSubCatDuplicate } = require('../../MiddleWare/CheckDuplicateSubCat');
const SubCategoryRoutes =  express.Router();

SubCategoryRoutes.get('/subcategory-list' , SubcategoryList);
SubCategoryRoutes.delete('/subcategory-delete/:id' , SubCategoryDelete);
SubCategoryRoutes.get('/subcategory-listbycatid/:id' , Subcatlistbycatid);
SubCategoryRoutes.post('/subcategory-create' , CheckSubCatDuplicate , CreateSubCategory);
SubCategoryRoutes.put('/subcategory-update/:id' , UpdateSubCategory);
SubCategoryRoutes.get('/subcategory-onlysublist' , OnlySubcategory);

module.exports = SubCategoryRoutes