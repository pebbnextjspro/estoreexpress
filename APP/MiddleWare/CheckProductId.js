const connection = require('../Config/db');

let CheckProductId = (req , res , next) => {

    const sql = `select * from tblwishlist where ProductId = ? AND UserId = ? LIMIT 1`;

    const {ProductId , UserId} = req.body;
    connection.query(sql , [ProductId , UserId] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});

        if (result.length !== 0) {

            return res.status(409).json({success: false , msg: 'Product Already Exist in WishList'});
        } else {

            next()
        }
    })
}

module.exports = {CheckProductId}