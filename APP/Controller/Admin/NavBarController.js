const express = require('express');
const app = express();
const connection = require('../../Config/db');

//Define MiddleWares/////
app.use(express.json());

//Get Define Controllers///

let NabBarList = (req , res) => {

    const sql = `SELECT ROW_NUMBER() OVER (order by NavBarId) AS SrNo,nav.NavBarId ,
     nav.MainItem , nav.SubItem  FROM tblnavbar nav`;

    connection.query(sql , (error , result) => {

        if (error) return res.json({success: false, msg: 'There is an Error in Server' , Error: error});
        if (result) return res.json({success: true , msg: 'Data Get Succesfully' , Data: result});
    })
}

let NavBarDelete = (req , res) => {

    const sql = `Delete From tblnavbar where NavBarId = ?`;
    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

        if (error) return res.json({success: false, msg: 'There is an Error in Server' , Error: error});
        if (result) return res.json({success: true , msg: 'Record Has been Deleted' , Data: result});
    } )
}

module.exports = {NabBarList , NavBarDelete}