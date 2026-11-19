const express = require('express');
const { GetUserData, DeleteUserData, CreateUser, postdata, ConfirmCode, ResendCode, CheckUserNamePassword, ResetCodeEmail, ConfirmCodeAgain, UpdatePassword, UserList, UpdateUser, UserImageUpdate, CheckUserNamePasswordNext } = require('../../Controller/Admin/UserController');
const upload = require('../../multer');
const { DuplicateUserName, CheckEmailAddress, CheckEmailAddress2 } = require('../../MiddleWare/CheckUserName');
const { checkduplicate } = require('../../MiddleWare/CheckDup');
const { CheckIsActive } = require('../../MiddleWare/CheckIsActive');
const UserRoutes = express.Router();

UserRoutes.get('/users-list' , GetUserData);
UserRoutes.post('/users-delete' , DeleteUserData);
UserRoutes.post('/users-create', upload.single('images') , checkduplicate  , CreateUser);
UserRoutes.post('/user-confirmation' , ConfirmCode);
UserRoutes.post('/user-confirmationagain' , ConfirmCodeAgain);
UserRoutes.put('/code-resend' , ResendCode);
UserRoutes.post('/check-login' , CheckEmailAddress,CheckIsActive, CheckUserNamePassword);
UserRoutes.post('/check-loginnext' , CheckEmailAddress ,CheckUserNamePasswordNext);
UserRoutes.post('/sendreset-code' ,CheckEmailAddress, ResetCodeEmail);
UserRoutes.put('/reset-password/:useremail' , UpdatePassword);
UserRoutes.get('/list-users/:id' , UserList);
UserRoutes.put('/user-update/:id', CheckEmailAddress2 , UpdateUser);
UserRoutes.put('/userimage-update/:id', upload.single('image') , UserImageUpdate);

module.exports = UserRoutes