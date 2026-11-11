const connection = require('../../Config/db')


let CreateBanner = (req , res) => {

    const sql = `insert into tblbanner (Heading1, Heading2, Heading3, NewPrice, OldPrice, Rating,ShortDesc, Likes, 
    DisLikes, BannerImage, ProductId,BannerCategory)
     values 
    (?,?,?,?,?,?,?,?,?,?,?,?)`;

    const {Heading1, Heading2, Heading3, NewPrice, OldPrice, Rating,ShortDesc, 
        Likes, DisLikes , ProductId , BannerCategory} =   req.body;
    const image = req.file.filename;
    console.log(req.body);
    console.log(req.file);

    connection.query(sql , [Heading1, Heading2, Heading3, NewPrice, OldPrice, Rating,ShortDesc, 
        Likes, DisLikes , image , ProductId, BannerCategory] , (error , result) => {

        console.log(error);
        if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Created Succesfuly' , Data: result});
    })    
}

let GetBanner = (req , res) => {

    const sql = `SELECT bnr.* , pr.* FROM tblbanner bnr INNER JOIN products pr ON bnr.ProductId = pr.id `;

    connection.query(sql , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true ,  Data: result});

    })
}

let GetBannerBySingle = (req , res) => {

    const sql = `select bnr.ProductId, bnr.Heading1,bnr.Heading2,bnr.Heading3 ,bnr.NewPrice,
bnr.OldPrice , bnr.Rating ,bnr.Likes , bnr.DisLikes, bnr.BannerImage,bnr.ShortDesc,bnr.BannerCategory, pr.id, pr.ProductName ,
    pr.ProductDescription, ct.CategoryName ,pr.ProductCategory,pr.ProductSubCategory,pr.ProductBrand,
     sct.SubCategory,br.BrandName,pr.ProductNewPrice,
pr.ProductOldPrice,pr.ProductsInStock,pr.ProductRating,pr.ProductColor,pr.ProductImages1,pr.ProductImages4,
pr.ProductWeight, pr.ProductShipCharges
from categories ct , products pr , tblsubcategories sct, tblbrands br , tblbanner bnr
where bnr.BannerCategory = 'singlebanner' and pr.ProductCategory = ct.id and pr.ProductSubCategory = sct.id and pr.ProductBrand = br.BrandId AND
pr.id = bnr.ProductId`;

    connection.query(sql , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true ,  Data: result});

    })
}


let GetBannerBySmall = (req , res) => {

    const sql = `select bnr.ProductId, bnr.Heading1,bnr.Heading2,bnr.Heading3 ,bnr.NewPrice,
bnr.OldPrice , bnr.Rating ,bnr.Likes , bnr.DisLikes, bnr.BannerImage,bnr.ShortDesc,bnr.BannerCategory, pr.id, pr.ProductName ,
    pr.ProductDescription, ct.CategoryName ,pr.ProductCategory,pr.ProductSubCategory,pr.ProductBrand,
     sct.SubCategory,br.BrandName,pr.ProductNewPrice,
pr.ProductOldPrice,pr.ProductsInStock,pr.ProductRating,pr.ProductColor,pr.ProductImages1,pr.ProductImages4,
pr.ProductWeight, pr.ProductShipCharges
from categories ct , products pr , tblsubcategories sct, tblbrands br , tblbanner bnr
where bnr.BannerCategory = 'smallbanner' and pr.ProductCategory = ct.id and pr.ProductSubCategory = sct.id and pr.ProductBrand = br.BrandId AND
pr.id = bnr.ProductId`;

    connection.query(sql , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true ,  Data: result});

    })
}

let UpdateBanner = (req , res) => {

    // if (!req.file) {

    //     res.status(400).json({success: true , msg: "Image is not found"});
    //     return;
    // }

    const sql = `update tblbanner set Heading1=?, Heading2=?, Heading3=?, NewPrice=?, OldPrice=?,
     Rating=?,ShortDesc=?, Likes=?, DisLikes=?, BannerImage=?, ProductId=? where BannerId = ?`;

     const {heading1, heading2, heading3, newprice, oldprice, rating,shortdesc, likes,
        bannerimage, dislikes,productid} = req.body;
     const id = req.params.id;
     const image = !req.file ? bannerimage : req.file.filename;  
     console.log(image) 

     connection.query(sql , [heading1, heading2, heading3, newprice, oldprice, rating,shortdesc, likes, dislikes ,image ,productid, id], 
        (error , result) => {

            console.log(error);
               if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Updated Succesfuly' , Data: result});

        })
}

let DeleteBanner = (req , res) => {

    const sql = `delete from tblbanner where BannerId in (?)`;

    const {ids} = req.body;
    console.log(ids);

    connection.query(sql , [ids] , (error , result) => {

          console.log(error);
               if (error) return res.status(500).json({success: true , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Deleted Succesfuly' , Data: result});

    })
}

module.exports = {CreateBanner , GetBanner , UpdateBanner , DeleteBanner , GetBannerBySingle , GetBannerBySmall}