const express = require('express');
const app = express();
const connection = require('../../Config/db');

let BrandList = (req , res) => {

    const sql = `Select ROW_NUMBER() OVER (order by BrandId) AS SrNo, br.BrandId,br.BrandName,br.BrandImage
     From tblbrands br order by br.BrandName`

    connection.query(sql , (error , result) => {
        console.log(error);
        if (error) return res.json({success: false , msg: 'There is an Error' , Error: error});
        if (result) return res.json({success: true , msg: 'Data Get Successfully' , Data: result})
    })
}

let BrandDelete = (req , res) => {

    const sql = `Delete From tblbrands where BrandId = ?`;
    const id = req.params.id;
    connection.query(sql , [id] , (error , result) => {

       if (error) return res.json({success: false , msg: 'There is an Error' , Error: error});
        if (result) return res.json({success: true , msg: 'Data Deleted Successfully' , Data: result})
    })
}

let BrandCreate = (req , res) => {

    const sql = `Insert Into tblbrands (BrandName , BrandImage) Values (?,?)`;

    const BrandName = req.body.BrandName;
    const image = req.file ? req.file.filename : null

    connection.query(sql , [BrandName , image] , (error , result) => {

        if (error) return res.status(400).json({success: false , msg: 'There is an Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Created Successfully' , Data: result})
    })
}

let BrandUpdate = (req , res) => {

    const sql = `Update tblbrands SET BrandName = ? , BrandImage = ? where BrandId = ?`;

    const id = req.params.id;
    const BrandName = req.body.BrandName;
    const BrandImage = req.body.BrandImage;
    const image = req.file ? req.file.filename : BrandImage

    connection.query(sql , [BrandName , image , id] , (error , result) => {
        console.log(error);
         if (error) return res.status(400).json({success: false , msg: 'There is an Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Updated Successfully' , Data: result})
    })
}
module.exports = {BrandList , BrandDelete , BrandCreate , BrandUpdate}