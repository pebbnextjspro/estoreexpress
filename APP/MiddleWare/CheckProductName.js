const connection = require('../Config/db');


const CheckDuplicateName = (req , res , next) => {

    const {ProductName} = req.body;

    if (!ProductName) {

        return res.status(400).json({success: false , msg: 'Please Enter Product Name'});
    }

    const sql = `Select ProductName From products Where ProductName = ? LIMIT 1`;

    connection.query(sql , [ProductName] , (error , result) => {

        console.log(error);

        if (error) return res.status(500).json({success: false , msg: "There is an Error in DB"});
         if (result.length > 0) {

        return res.json({success: false , msg: "There is a Duplicate Value in Table"})
    }

    next();

    })

   
}

module.exports = {CheckDuplicateName}