const connection = require('../Config/db');

let CheckCategoryName = (req , res , next) => {

    const sql = `Select CategoryName From categories where CategoryName = ? LIMIT 1`;

    const CategoryName = req.body.CategoryName;

    connection.query(sql , [CategoryName] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: "DB Error"});

        if (result.length > 0) {

            return res.status(409).json({success: false , msg: "There is Duplicate Category"});
        }

         next();
    })

   
}

module.exports = {CheckCategoryName}