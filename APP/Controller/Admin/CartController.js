const connection = require('../../Config/db')

let CreateCartList = (req  , res) => {

    const sql = `insert into tblcart (ProductId , UserId ,Qty , ProductPrice , ProductShipCharges) values (?,?,?,?,?)`;

    const {ProductId , UserId, Qty , ProductPrice, ProductShipCharges} = req.body;
    // const price = Qty + ProductPrice;
    console.log(req.body);
    connection.query(sql , [ProductId , UserId , Qty , ProductPrice , ProductShipCharges] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) {

            res.status(200).json({success: true , msg: 'Item Added to Cart' , Data: result});
            const sql = `UPDATE products SET ProductsInStock = ProductsInStock - ? WHERE id = ?`;
            
            connection.query(sql , [Qty , ProductId]) , (error , result) => {


            }
        }
 
    })
}


let CreateCartListMinus = (req  , res) => {

    const sql = `insert into tblcart (ProductId , UserId ,Qty , ProductPrice , ProductShipCharges) values (?,?,?,?,?)`;

    const {ProductId , UserId, Qty , ProductPrice, ProductShipCharges} = req.body;
    // const price = Qty + ProductPrice;
    console.log(req.body);
    connection.query(sql , [ProductId , UserId , Qty , ProductPrice , ProductShipCharges] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) {

            res.status(200).json({success: true , msg: 'Item Added to Cart' , Data: result});
            const sql = `UPDATE products SET ProductsInStock = ProductsInStock - ? WHERE id = ?`;
            
            connection.query(sql , [Qty , ProductId]) , (error , result) => {


            }
        }
 
    })
}

let GetCartID = (req , res) => {

    const sql = `select ct.CartId,ct.Qty , ct.ProductPrice , ct.ProductId,ct.UserId,pr.ProductName, 
    pr.ProductDescription , pr.ProductRating, pr.ProductNewPrice,
pr.ProductOldPrice,pr.ProductImages4,ct.ProductShipCharges
from tblcart ct , products pr where pr.id = ct.ProductId AND UserId = ?`;
    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}

let DeleteCart = (req , res) => {

    const sql = `delete from tblcart where CartId = ?`;
    const {CartId} = req.body;
    connection.query(sql , [CartId] , (error , result) => {

        console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Product Deleted Succesfully' , Data: result}) 

    })
}

let GetCartItems = (req , res) => {

    const sql = `select pr.ProductName ,ct.UserId,
     pr.ProductNewPrice,SUM(pr.ProductNewPrice * ct.Qty)  AS SubTotal,pr.ProductOldPrice,pr.ProductRating,
      pr.ProductImages4, ct.ProductId , SUM(ct.ProductShipCharges) AS ShippingCharges, pr.ProductShipCharges,
      SUM(ct.Qty) AS Qty from tblcart ct, products pr WHERE pr.id = ct.ProductId AND ct.UserId = ? Group BY ct.ProductId;
`;
    const id = req.params.id;

    connection.query(sql , [id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}
let CartDelete = (req, res) => {
    const { UserId, ProductId, Qty } = req.body;

    const deleteSql = `DELETE FROM tblcart WHERE UserId = ? AND ProductId = ?`;

    connection.query(deleteSql, [UserId, ProductId], (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, msg: 'DB Error', Error: error });
        }

        // Update stock after delete success
        const updateSql = `UPDATE products SET ProductsInStock = ProductsInStock + ? WHERE id = ?`;

        connection.query(updateSql, [parseInt(Qty), ProductId], (err2, result2) => {
            if (err2) {
                return res.status(500).json({ success: false, msg: 'Stock Update Error', Error: err2 });
            }

            return res.status(200).json({
                success: true,
                msg: 'Item deleted & stock updated',
                Data: result
            });
        });
    });
};

let GetTotalQty = (req , res) => {

    const sql = `SELECT sum(ct.Qty) AS TotalQty FROM tblcart ct WHERE ct.ProductId = ? AND ct.UserId = ? GROUP BY ct.UserId`;
    const productid = req.params.productid;
    const userid = req.params.userid;


    connection.query(sql , [productid , userid] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result}) 
    })

}





module.exports = {CreateCartList , GetCartID , DeleteCart , GetCartItems , CartDelete , GetTotalQty , CreateCartListMinus}