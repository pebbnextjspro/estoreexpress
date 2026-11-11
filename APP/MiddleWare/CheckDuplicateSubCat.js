const connection = require('../Config/db');

let CheckSubCatDuplicate = (req , res , next) => {

    const sql = `Select SubCategory From tblsubcategories Where SubCategory = ? LIMIT 1`;

    const {SubCategory} = req.body;

    connection.query(sql , [SubCategory] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: "DB Error"});
        if (result.length > 0) {

            return res.status(409).json({success: false , msg: "Duplicate SubCategory Not Allowed"});
        } 
        
        next();
    })

}

module.exports = {CheckSubCatDuplicate}