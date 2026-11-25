const connection = require('../Config/db');

let CheckWishItemExist = (req , res , next) => {

    const sql = `SELECT * FROM tblwishlist WHERE ProductId = ? AND UserId = ?`;
    const {ProductId , UserId} = req.body;
    connection.query(sql , [ProductId , UserId] , (error , result) => {

         if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result.length>0) {

            return res.status(200).json({success: false , msg: 'Product Already in WishList' , Data: result}) 
        } else {

            next()
        }
    })
}

module.exports={CheckWishItemExist}