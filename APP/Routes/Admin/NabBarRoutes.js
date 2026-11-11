const express = require('express');
const { NabBarList, NavBarDelete } = require('../../Controller/Admin/NavBarController');
const NavBarRouter = express.Router();

NavBarRouter.get('/navbar-list' , NabBarList);
NavBarRouter.delete('/navbar-delete/:id' , NavBarDelete)

module.exports = NavBarRouter