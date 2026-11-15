const express = require('express');
const app = express();
const connection = require('../../Config/db');

//Define MiddleWares/////
app.use(express.json());

//Get Define Controllers///

let CategoryList = (req , res) => {

    const sql = `SELECT ROW_NUMBER() OVER (order by id) AS SrNo,id,CategoryName,CategoryImgUrl,
    CategoryColor FROM categories order by CategoryName`;
    connection.query(sql , (error , result) => {
        if (error) return res.json({success: false, msg: "There is a Server Error" , Error: error});
        if (result) return res.json({success: true ,  msg: "Data Get Succesfuly" , Data: result});
    })
}

let CategoryDelete = (req , res) => {

    const sql = 'delete from categories where id=?';
    const id = req.params.id;
    connection.query(sql , [id] , (error , result) => {
        console.log(error);
        if (error) return res.status(500).json({success: false, msg: "There is an error in Server"});
        if (result) return res.status(200).json({ success: true, msg: "Data Deleted Successfully" , Data: result})
    })

}

let CategoryCustom = (req , res) => {
    const sql = `SELECT ct.CategoryImgUrl, ct.CategoryName , subcat.SubCategory FROM categories ct , tblsubcategories subcat
WHERE ct.id = subcat.CategoryID`;

    connection.query(sql , (error , result) => {
        if (error) return res.status(404).json({success: false, msg: "There is an Error in Server" , Error: error})
            if (result) return res.status(200).json({success: true, msg: "Data Get Successfuly" , Data: result})
    })
}

let CreateCategory = (req , res) => {

    const sql = `INSERT INTO categories (CategoryName, CategoryImgUrl,CategoryColor) VALUES (? , ? , ?)`;

    const {CategoryName ,CategoryColor} = req.body;

    const image = req.file ? req.file.filename : null;
    if (!CategoryName) {

        return res.status(400).json({success: false , msg: "Please Enter CategoryName"});
    }

    connection.query(sql , [CategoryName , image , CategoryColor] , (error , result) => {
        console.log(error);

       if (error) return res.status(500).json({success: false , msg: "DB Error"});
       if (result) return res.status(200).json({success: true , msg: "Data Created Succefuly" , Data: result});
    })
}

let UpdateCategory = (req , res) => {

    const sql = `UPDATE categories SET CategoryName=?, CategoryImgUrl=? , CategoryColor=? Where id = ?`;

    const {CategoryName , CategoryColor} = req.body;
    const id = req.params.id;

    if (!CategoryName) {

        return res.status(400).json({success: false , msg: "Please Enter Category Name"});
    };

    const image = req.file ? req.file.filename : null;

    connection.query(sql , [CategoryName , image , CategoryColor , id] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: "DB Error", Error: error});
        if (result) return res.status(200).json({success: true , msg: "Data Has Been Updated" , Data: result});
    });
}


module.exports = {CategoryList , CategoryDelete , CategoryCustom , CreateCategory , UpdateCategory}