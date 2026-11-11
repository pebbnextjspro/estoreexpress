const connection = require('../Config/db');

let CheckReviewEmailAddress = (req , res , next) => {

    const sql = `select EmailAddress,ProductId from tblreview where EmailAddress=? and ProductId=?`;

    const {emailaddress,productid} = req.body;    

    connection.query(sql , [emailaddress,productid] , (error , result) => {

        if (error)  if (error) return res.status(500).json({success: false , msg: "DB Error"});

        if (result.length > 0) {

            return res.json({success: false ,  msg: "Review submitted already!"})
        } else {

            next();
        }
    })
    
}

module.exports = {CheckReviewEmailAddress}