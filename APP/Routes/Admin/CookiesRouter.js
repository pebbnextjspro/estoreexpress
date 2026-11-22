const express = require('express');
const { SendCookies } = require('../../Controller/Admin/CookiesController');
const CookieRoutes =  express.Router();

CookieRoutes.get('/get-cookie' , SendCookies);

module.exports=CookieRoutes