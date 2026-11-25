const connection = require('../../Config/db');

let CreateInvoice = (req , res) => {

    const sql = `insert into tblinvoice (ProductId,ProductName,
    ProductImages2,ProductColor,ProductNewPrice,ProductOldPrice,
    ProductQty,UserId,InvoiceNumber,ProductImages1,ProductShipCharges) Value (?,?,?,?,?,?,?,?,?,?,?)`;
    const InvoiceNumber = req.params.invoicenumber;
    const {ProductId,ProductName,
    ProductImages2,ProductColor,ProductNewPrice,ProductOldPrice,
    TotalQty,
     UserId,ProductImages1,TotalAmount} = req.body;

    connection.query(sql , [ProductId,ProductName,
    ProductImages2,ProductColor,ProductNewPrice,ProductOldPrice,
    TotalQty,
     UserId,InvoiceNumber,ProductImages1,TotalAmount] , (error , result) => {
console.log(error)
         if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Add Succesfully' , Data: result}) 

    })

}

module.exports = {CreateInvoice}