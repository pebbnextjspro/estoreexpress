 const connection = require('../Config/db');

 let ProductUpdateQty = (req , res , next) => {

   
    const sql = `UPDATE products SET ProductsInStock = ProductsInStock+? WHERE id = ?`;
    const {TotalQty} = req.body;
    console.log("TotalQty" , TotalQty)
    const productid = req.params.productid;
   
     connection.query(sql , [TotalQty , productid] , (error , result) => {

         if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result.affectedRows>0){

           next();

        }
    })


}

module.exports={ProductUpdateQty}
