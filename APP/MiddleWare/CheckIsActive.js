const connection = require('../Config/db');


let CheckIsActive = (req , res , next) => {

    const sql = `select * from tblusers where UserEmail = ? AND IsActive = true `;
    const {UserEmail} = req.body;

    connection.query(sql , [UserEmail] , (error , result) => {

        if (result.length > 0) {

           next()
        } else {

            return res.status(500).json({success: false , msg: "Please Enter Confirmation Code" , Error: error})
        }
    })

}

module.exports = {CheckIsActive}