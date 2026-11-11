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

    const sql = `select wl.WishlistId , wl.ProductId,wl.UserId,pr.ProductName, pr.ProductDescription , pr.ProductRating, pr.ProductNewPrice,
pr.ProductOldPrice,pr.ProductImages4,pr.ProductShipCharges
from tblwishlist wl , products pr where pr.id = wl.ProductId AND UserId = ?`;
    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}

let DeleteWishList = (req , res) => {

    const sql = `delete from tblwishlist where WishlistId = ?`;
    const {WishlistId} = req.body;
    connection.query(sql , [WishlistId] , (error , result) => {

        console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Product Deleted Succesfully' , Data: result}) 

    })
}



module.exports = {CreateWishList , GetWishListIDS , DeleteWishList}