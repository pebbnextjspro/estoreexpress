const connection = require('../Config/db')




let checkduplicateNext = (req , res , next) => {

    const sql = `select * from tblusers where UserId = ?`

    const id = req.params.id;
    

    connection.query(sql , [id] , (error, result) => {
        if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
        if (result.length > 0) {

            return res.status(401).json({success: true , msg: "User Already Exist" , Data: result})
        } else {

            next();
        }
    })
    
}

module.exports = { checkduplicateNext}