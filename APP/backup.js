const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./APP/Config/db');
dotenv.config();
const cors = require('cors')



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get('/api/admin/products/product-list' , (req , res) => {

    const sql = 'SELECT * FROM products';
    connection.query(sql , (error , result) => {
        if(error) return res.json({msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({msg: "Data Get Succesfully" , Data: result});
    })
})

app.listen(process.env.PORT || 5000 , (error) => {

    if (error) throw error;
    console.log(`Server Running on ${process.env.PORT}`);
});

