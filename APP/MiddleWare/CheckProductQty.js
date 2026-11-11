const express = require('express');
const connection = require('../Config/db');

const CheckProductQty = (req , res , next) => {

    const sql = `SELECT id FROM products WHERE ProductsInStock = 0 and id = ?`

    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

        console.log(error)
        if (error) return res.status(500).json({success: false , msg: "There is an Server DB Error" , Error: error});

        if (result.length > 0) {

            return res.json({success: false , msg: "Selected Item Not Available/not in stock"})                
        }

        next()


    })


}

const CheckProductQty2 = (req , res , next) => {

    const sql = `SELECT id FROM products WHERE ProductsInStock  = 0 and id = ?`

    const {ProductId} = req.body;

    connection.query(sql , [ProductId] , (error , result) => {

        console.log(error)
        if (error) return res.status(500).json({success: false , msg: "There is an Server DB Error" , Error: error});

        if (result.length > 0) {

            return res.status(400).json({success: false , msg: "Selected Item Not Available/not in stock"})                
        }

        next()


    })


}

const CheckProductQty3 = (req , res , next) => {

    const sql = `SELECT id FROM products WHERE ProductsInStock  = 1   and id = ?`

    const {ProductId} = req.body;

    connection.query(sql , [ProductId] , (error , result) => {

        console.log(error)
        if (error) return res.status(500).json({success: false , msg: "There is an Server DB Error" , Error: error});

        if (result.length > 0) {

            return res.status(400).json({success: false , msg: "Selected Item Not Available/not in stock"})                
        }

        next()


    })


}



    module.exports = {CheckProductQty , CheckProductQty2 , CheckProductQty3}