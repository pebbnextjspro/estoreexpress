const connection = require('../../Config/db');

let CreateWishList = (req  , res) => {

    const sql = `insert into tblwishlist (ProductId , UserId) values (?,?)`;

    const {ProductId , UserId} = req.body;
    console.log(req.body);
    connection.query(sql , [ProductId , UserId] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Item Added to WishList' , Data: result})    
 
    })
}

let GetWishListIDS = (req , res) => {

    const sql = `select * from tblwishlist where UserId = ?`;
    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}

let GetWishListIDSNext = (req , res) => {

    const sql = `select * from tblwishlist where UserId = ?`;
    const UserId = req.params.id;

    connection.query(sql , [UserId] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}

let DeleteWishList = (req , res) => {

    const sql = `delete from tblwishlist where WishlistId = ?`;
    const {WishlistId} = req.body;
    connection.query(sql , [WishlistId] , (error , result) => {

      
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Product Deleted Succesfully' , Data: result}) 

    })
}

let CreateWishListNext = (req , res) => {

    const sql = `insert into tblwishlist (
  ProductName,
  ProductId,
  ProductImages2,
  ProductColor,
  ProductNewPrice,
  ProductOldPrice,
  ProductQty,
  UserId,
  InvoiceNumber,
  ProductImages1,
  ProductShipCharges) Values (?,?,?,?,?,?,?,?,?,?,?)`;

    const { 
  ProductName,
  ProductId,
  ProductImages2,
  ProductColor,
  ProductNewPrice,
  ProductOldPrice,
  ProductQty,
  UserId,
  InvoiceNumber,
  ProductImages1,
  ProductShipCharges} = req.body;

  connection.query(sql , [ProductName,
  ProductId,
  ProductImages2,
  ProductColor,
  ProductNewPrice,
  ProductOldPrice,
  ProductQty,
  UserId,
  InvoiceNumber,
  ProductImages1,
  ProductShipCharges] , (error , result) => {


      if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Product Add to WishList' , Data: result}) 


  })

  
}

let WishlistQty = (req , res) => {

    const sql = `SELECT SUM(ProductQty) AS ProductQty, SUM(ProductShipCharges) AS ProductShipCharges
    , SUM(ProductNewPrice) AS ProductNewPrice, SUM(ProductNewPrice) + SUM(ProductShipCharges) AS
    GrandTotal
     FROM tblwishlist WHERE UserId = ?`;

    const id = req.params.id;
    connection.query(sql , [id] , (error , result) => {

          if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 

    })
}

let WishTableItems = (req , res) => {
    const sql = `select ProductId,ProductName,ProductImages2 AS ProductDescription, ProductColor,ProductNewPrice,ProductOldPrice,
ProductImages1,ProductShipCharges,
SUM(ProductQty) AS TotalQty , SUM(ProductNewPrice) AS TotalAmount FROM tblwishlist WHERE UserId = ?
GROUP BY ProductId Order By ProductName `;
    const id = req.params.id;
    connection.query(sql , [id] ,(error , result) => {

        
          if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 

    })
}

let WishDeleteNext = (req , res) => {

    const sql = `DELETE FROM tblwishlist WHERE ProductId = ? AND UserId = ?`;
    const productid = req.params.productid;
    const userid = req.params.userid;
    connection.query(sql , [productid , userid] , (error , result) => {

         if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Deleted Succesfully' , Data: result}) 

    })

}


module.exports = {CreateWishList ,GetWishListIDSNext,
     GetWishListIDS ,CreateWishListNext, DeleteWishList , WishlistQty,WishTableItems,WishDeleteNext}