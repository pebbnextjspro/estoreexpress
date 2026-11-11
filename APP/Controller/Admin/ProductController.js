const express = require('express');
const app = express();
const connection = require('../../Config/db');

const productlist = process.env.PRODUCT_LIST_QUERY;
//Define MiddleWares/////
app.use(express.json());


//Get Define Controllers///

let ProductList = (req , res) => {

    const sql = `${productlist}`;
    connection.query(sql , (error , result) => {
      console.log(error);
        if(error) return res.status(500).json({success: false, msg: 'There is an error in DB' ,  Error: error});
        if(result) return res.status(200).json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProductListByBrand = (req , res) => {

    const sql = `${productlist} and 
    pr.ProductCategory = ? and br.BrandId = ?`;

    const {categoryid , brandid} = req.params;

    connection.query(sql ,[categoryid , brandid], (error , result) => {
      console.log(error);
        if(error) return res.json({success: false, msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProductListByRating = (req , res) => {

    const sql = `${productlist} and 
    pr.ProductCategory = ? and pr.ProductRating = ?`;

    const {categoryid , rating} = req.params;

    connection.query(sql ,[categoryid , rating], (error , result) => {
      console.log(error);
        if(error) return res.json({success: false, msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProdcutListByColorandPrice = (req , res) => {

    const sql = `${productlist} and 
    pr.ProductCategory = ? and pr.ProductColor = ? and pr.ProductOldPrice BETWEEN ? and ?`;

    const {categoryid , color , minprice , maxprice} = req.params;


    connection.query(sql , [categoryid , color , minprice , maxprice] , (error , result) => {
      console.log(error);
        if(error) return res.json({success: false, msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProdcutListBySubCategory = (req , res) => {

    const sql = `${productlist} and 
    pr.ProductCategory = ? and pr.ProductSubCategory = ?`;

    const {categoryid , subcategoryid} = req.params;


    connection.query(sql , [categoryid , subcategoryid] , (error , result) => {
      console.log(error);
        if(error) return res.json({success: false, msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProdcutListBySubCategoryandPrice = (req , res) => {

    const sql = `${productlist} and 
    pr.ProductCategory = ? and pr.ProductSubCategory = ? AND pr.ProductOldPrice BETWEEN ? AND ?`;

    const {categoryid , subcategoryid , minprice , maxprice} = req.params;


    connection.query(sql , [categoryid , subcategoryid , minprice , maxprice] , (error , result) => {
      console.log(error);
        if(error) return res.json({success: false, msg: 'There is an error in Server' ,  Error: error});
        if(result) return res.json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}

let ProductListByCategory = (req , res) => {

    const sql = `${productlist} AND
pr.ProductCategory = ?`;

const {categoryid} = req.params;

    connection.query(sql , [categoryid] , (error , result) => {
      console.log(error);
        if(error) return res.status(500).json({success: false, msg: 'There is an error in DB' ,  Error: error});
        if(result) return res.status(200).json({success: true, msg: "Data Get Succesfully" , Data: result});
    })
}


let ProductListByColor = (req , res) => {

  const sql = `${productlist}
and pr.ProductCategory = ? and ProductColor = ?`

const {categoryid , productcolor} = req.params;

connection.query(sql , [categoryid , productcolor] , (error , result) => {

  console.log(error);

  if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
  if (result) return res.status(200).json({success: true , msg: "Data Get Succesfully" , Data: result});

})
}

let ProductDelete = (req , res) => {

    const sql = `delete from products where id = ?`;
    const id = req.params.id;
    connection.query(sql , [id] , (error , result) => {
        if (error) return res.json({msg: "There is a Server Error" , Error: error});
        if (result) return res.json({msg: "Data Deleted Successfuly" , Data: result})
    })

}

let ProductByPrice = (req , res) => {

    const sql = `${productlist} AND pr.ProductOldPrice BETWEEN ? AND ? AND pr.ProductCategory = ?`

const priceone = req.params.priceone;
const pricetwo = req.params.pricetwo;
const category = req.params.category;

connection.query(sql , [priceone , pricetwo , category] , (error , result) => {

    if (error) return res.json({success: false ,  msg: "There is a Server Error" , Error: error});
    if (result) return res.json({success: true , msg: "Data Deleted Successfuly" , Data: result})

})
}

let ProductUpdate = (req , res) => {

  const sql = `UPDATE products SET
  ProductName = ? ,
  ProductDescription = ?,
  ProductCategory = ?,
  ProductSubCategory = ?,
  ProductBrand = ?,
  ProductNewPrice = ?,
  ProductOldPrice = ?,
  ProductsInStock = ?,
  ProductRating = ?,
  ProductColor = ?,
  ProductImages4 = ?,
  IsFeatured  = ? , ProductWeight = ?,
  ProductShipCharges = ? where id = ?`;

  const {
    ProductName,
    ProductDescription,
    ProductCategory,
    ProductSubCategory,
    ProductBrand,
    ProductNewPrice,
    ProductOldPrice,
    ProductsInStock,
    ProductRating,
    ProductColor,
    IsFeatured,
    ProductImages4,
    ProductWeight,
    ProductShipCharges
  } = req.body; 

  const id = req.params.id;

  connection.query(sql , [ ProductName,
    ProductDescription,
    ProductCategory,
    ProductSubCategory,
    ProductBrand,
    ProductNewPrice,
    ProductOldPrice,
    ProductsInStock,
    ProductRating,
    ProductColor,
   JSON.stringify(ProductImages4),
    IsFeatured , ProductWeight,    ProductShipCharges, id] , (error , result) => {
      console.log(error);
      if (error) return res.status(500).json({success: false, msg: 'There is an Error in Server' , Error: error});
      if (result) return res.status(200).json({success: true , msg: 'Data Updated Successfuly' , Data: result})
    })


}

let ProductCreate2 = (req , res) => {

  const sql = `INSERT INTO products (ProductName,ProductImages4) VALUES (?,?)`;

  const {ProductName} = req.body;

  if (!ProductName) {

    return res.status(400).json({success: false , msg: 'Please Enter Product Name'});
  };

  if (!req?.files || req.files?.length === 0) {

    return res.status(400).json({success: false , msg: 'There is no Images Attached'})
  }

  const imagesarray = req.files?.map((file) => (file.filename));

  connection.query(sql , [ProductName , JSON.stringify(imagesarray)] , (error , result) => {

     if (error) return res.status(500).json({success: false, msg: 'There is an error in DB' , Error: error});
      if (result) return res.status(200).json({success: true , msg: 'Data Created Successfuly' , Data: result})

  });
}



let ProductCreate = (req, res) => {

    const {
        ProductName,
        ProductDescription,
        ProductCategory,
        ProductSubCategory,
        ProductBrand,
        ProductNewPrice,
        ProductOldPrice,
        ProductsInStock,
        ProductRating,
        ProductColor,
        IsFeatured,
        ProductWeight,
        ProductShipCharges
    } = req.body;

    // Check single image
    if (!req.files?.singleimage || req.files.singleimage.length === 0) {
        return res.status(400).json({
            success: false,
            msg: 'Single Image is Required'
        });
    }

    // Single image filename
    const singleimage = req.files.singleimage[0].filename;

    // Multiple images filenames
    const images = req.files?.images
        ? req.files.images.map((f) => f.filename)
        : [];

    const sql = `
        INSERT INTO products (
            ProductName,
            ProductDescription,
            ProductCategory,
            ProductSubCategory,
            ProductBrand,
            ProductNewPrice,
            ProductOldPrice,
            ProductsInStock,
            ProductRating,
            ProductColor,
            ProductImages1,
            ProductImages4,
            IsFeatured,
            ProductWeight,
            ProductShipCharges
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        ProductName,
        ProductDescription,
        ProductCategory,
        ProductSubCategory,
        ProductBrand,
        ProductNewPrice,
        ProductOldPrice,
        ProductsInStock,
        ProductRating,
        ProductColor,
        singleimage,
        JSON.stringify(images),
        IsFeatured,
        ProductWeight,
        ProductShipCharges
    ];

    connection.query(sql, values, (error, result) => {

        if (error) {
            console.log(error);

            return res.status(500).json({
                success: false,
                msg: 'There is a DB Error',
                Error: error
            });
        }

        return res.status(200).json({
            success: true,
            msg: 'Data Created Successfully',
            Data: result
        });
    });
};



let GetImages = (req , res) => {

  const sql = `Select ProductImages4 From products where id = ?`;

  const id = req.params.id;

  connection.query(sql , [id] , (error , result) => {

    console.log(error);

    if (error) return res.status(500).json({success: false , msg: 'There is an Error in DB', Error: error})
    if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully', Data: result})  
  })
}

let UploadImage = (req , res) => {

  const extrafiles = req.files.map((file) => (file.filename))
  

  if (extrafiles) {

    res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: extrafiles})
  }
}

let ListColorFilter = (req , res) => {

  const sql = `SELECT DISTINCT(ProductColor) from products WHERE ProductCategory = ?  order by ProductColor`;
  const {categoryid} = req.params;

  connection.query(sql , [categoryid] , (error , result) => {

    console.log(error);
     if (error) return res.status(500).json({success: false , msg: 'There is an Error in DB', Error: error})
    if (result) return res.status(200).json({success: true , msg: 'Data Color Succesfully', Data: result})  
  })
}

let ListBrandFilter = (req , res) => {

    const sql = `SELECT DISTINCT(br.BrandName) , br.BrandId , br.BrandImage FROM tblbrands br, products pr 
Where pr.ProductBrand = br.BrandId AND pr.ProductCategory = ? ORDER BY br.BrandName`;
    const {categoryid} = req.params;

  connection.query(sql , [categoryid], (error , result) => {

    console.log(error);
     if (error) return res.status(500).json({success: false , msg: 'There is an Error in DB', Error: error})
    if (result) return res.status(200).json({success: true , msg: 'Data Brand Succesfully', Data: result})  
  })
  

}

let ListSubCategoryFilter = (req , res) => {

    const sql = `Select DISTINCT(sc.SubCategory) , sc.id  FROM tblsubcategories sc , products pr 
WHERE sc.id = pr.ProductSubCategory AND pr.ProductCategory = ?`;
    const {categoryid} = req.params;

  connection.query(sql , [categoryid], (error , result) => {

    console.log(error);
     if (error) return res.status(500).json({success: false , msg: 'There is an Error in DB', Error: error})
    if (result) return res.status(200).json({success: true , msg: 'Data SubCategory Succesfully', Data: result})  
  })
  

}

let ListRatingFilter = (req , res) => {

    const sql = `SELECT DISTINCT(ProductRating) FROM products WHERE ProductCategory = ?`;
    const {categoryid} = req.params;

  connection.query(sql , [categoryid], (error , result) => {

    console.log(error);
     if (error) return res.status(500).json({success: false , msg: 'There is an Error in DB', Error: error})
    if (result) return res.status(200).json({success: true , msg: 'Data Rating Succesfully', Data: result})  
  })}



let UpdateQty = (req , res) => {

  const qty = req.params.qty;
  const id = req.params.id;


  const sql = `UPDATE products SET ProductsInStock = ProductsInStock - ? WHERE id = ?`;

  connection.query(sql , [qty , id] , (error , result) => {
    console.log(error);

    if (error) return res.status(500).json({success: false , msg: "There is an Errro in DB", Error: error});
    if (result) return res.status(200).json({success: true , msg: "Data Updated Succesfully" , Data: result})
  })
}

let UpdateQtyMinus = (req , res) => {

  const qty = req.params.qty;
  const id = req.params.id;


  const sql = `UPDATE products SET ProductsInStock = ProductsInStock + ? WHERE id = ?`;

  connection.query(sql , [qty , id] , (error , result) => {
    console.log(error);

    if (error) return res.status(500).json({success: false , msg: "There is an Errro in DB", Error: error});
    if (result) return res.status(200).json({success: true , msg: "Data Updated Succesfully" , Data: result})
  })
}

const GetListById = (req , res) => {

  const sql = `select * from products where id=?`;
  const id = req.params.id;

  connection.query(sql , [id] , (error , result) => {

    if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
    if (result) return res.status(200).json({success: true , msg: 'Data Get Succesfully' , Data: result})
  })
} 

let UpdateMainImage = (req , res) => {

  const sql = `UPDATE products SET ProductImages1 = ? WHERE id = ?`;
  const id = req.params.id;
  const singlimage = req.file.filename;
  console.log(singlimage)

  connection.query(sql , [singlimage , id] , (error , result) => {

if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
    if (result) return res.status(200).json({success: true , msg: 'Single Image Updated' , Data: result})

  })
}

module.exports = {ProductList , ProductDelete , ProductByPrice , ProductCreate , ProductUpdate ,
   ProductCreate2 , GetImages , UploadImage , ListColorFilter , ProductListByColor , ListBrandFilter , 
  ProductListByCategory , ProdcutListByColorandPrice , ProductListByBrand,ListSubCategoryFilter,
ProdcutListBySubCategory , ProdcutListBySubCategoryandPrice, ListRatingFilter , ProductListByRating, UpdateQty ,
 UpdateQtyMinus, GetListById, UpdateMainImage}