const connection = require('../Config/db')


let checkduplicate = (req , res , next) => {

    const sql = `select * from tblusers where UserName = ?`

    const UserName = req.body.UserName;

    connection.query(sql , [UserName] , (error, result) => {
        if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
        if (result.length > 0) {

            return res.status(401).json({success: true , msg: "User Name Already Exist" , Data: result})
        } else {

            next();
        }
    })
    
}

module.exports = {checkduplicate}