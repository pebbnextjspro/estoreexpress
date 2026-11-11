const connection = require('../../Config/db')

let GetReviewList = (req , res) => {

    const sql = `select * from tblreview where ProductId=? order by ReviewId DESC`;
    const id =req.params.id;

    connection.query(sql , [id] , (error , result) => {

        if (error) return res.status(500).json({success: true , msg: "DB Error" , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result});

    })
}

let CreateReview = (req , res) => {





    const sql = `insert into tblreview (ReviewRating,CustomerName,CustomerImage,ProductName,ProductImage,ProductReview,
    ProductId,EmailAddress) VALUES (?,?,?,?,?,?,?,?)`;

    const {rating , username , comments , emailaddress , productid ,productname} = req.body;
   
    const customerimage = req.files?.customerimage?.length > 0 ? req.files.customerimage[0].filename : '1767171248323-55104682.png';
    const productimage = req.files.productimage[0].filename;


    connection.query(sql , [rating , username ,customerimage,productname,productimage, comments  , productid,emailaddress ] , 
        (error , result) => {

         if (error) return res.status(500).json({success: true , msg: "DB Error" , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Review Created Succesfully' , Data: result});

    })
}

module.exports={GetReviewList , CreateReview}