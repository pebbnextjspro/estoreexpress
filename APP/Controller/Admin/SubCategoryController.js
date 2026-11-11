const express = require('express');
const app = express();
const connection = require('../../Config/db');


app.use(express.json());


let SubcategoryList = (req , res) => {

    const sql = `select ROW_NUMBER() OVER (order by id) AS SrNo, scat.id , scat.SubCategory , cat.CategoryName , scat.CategoryID
from tblsubcategories scat , categories cat where 
scat.CategoryID = cat.id`
    connection.query(sql , (error , result) => {

        if (error) return res.json({msg: "There is an Error in Server" , Error: error});
        if (result) return res.json({msg: "Data Get Successfuly", Data: result});
    })

}

let OnlySubcategory = (req , res) => {

    const sql = `select ROW_NUMBER() OVER (order by id) AS SrNo, scat.id , cat.CategoryName , scat.CategoryID, 
cat.CategoryImgUrl , cat.CategoryColor , scat.SubCategory
from tblsubcategories scat , categories cat where 
scat.CategoryID = cat.id`
    connection.query(sql , (error , result) => {

        if (error) return res.json({msg: "There is an Error in Server" , Error: error});
        if (result) return res.json({msg: "Data Get Successfuly", Data: result});
    })

}

let SubCategoryDelete = (req , res) => {
    const sql = 'delete from tblsubcategories where id=?';
    const id = req.params.id;
    connection.query(sql , [id] , (error , result) => {
        if(error) return res.json({msg: "There is an Error in Server" , Error: error});
        if(result) return res.json({msg: "Data Deleted Successfuly" , Data: result});
    })
}

let Subcatlistbycatid = (req , res) => {

    const sql = `select ROW_NUMBER() OVER (order by id) AS SrNo, scat.id , scat.SubCategory , cat.CategoryName , scat.CategoryID
from tblsubcategories scat , categories cat where 
scat.CategoryID = cat.id and scat.CategoryID = ?`;

const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

        if (error) return res.json({msg: "There is an Error in Server" , Error: error});
        if (result) return res.json({msg: "Data Get Successfuly", Data: result});
    })

}

let CreateSubCategory = (req , res) => {

const sql = `INSERT INTO tblsubcategories (SubCategory , CategoryID) VALUES (? , ?)`;
const {SubCategory , CategoryID} = req.body;
if(!SubCategory) {

    return res.status(400).json({success: false , msg: "Please Enter SubCategory"});
}

connection.query(sql , [SubCategory , CategoryID] , (error , result) => {

    if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error})
    if (result) return res.status(200).json({success: true , msg: "Data Has Been Created Succefully" , Data: result});    
})
}

let UpdateSubCategory = (req , res) => {

    const sql = `UPDATE tblsubcategories SET SubCategory=? , CategoryID=? Where id = ?`;

    const {SubCategory , CategoryID} = req.body;
    const id = req.params.id;
    connection.query(sql , [SubCategory , CategoryID , id] , (error , result) => {

         if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error})
    if (result) return res.status(200).json({success: true , msg: "Data Has Been Updated Succefully" , Data: result});   

    })
}

module.exports = {SubcategoryList , SubCategoryDelete , Subcatlistbycatid , CreateSubCategory , UpdateSubCategory , OnlySubcategory}