const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connection = require('./APP/Config/db')
const path = require('path')

// Load env variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/test', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'Uploads', '1766746648414-774077389.jpg')
  );
});


app.get('/getlist' , (req , res) => {

     const sql = 'SELECT ROW_NUMBER() OVER (order by id) AS SrNo,id,CategoryName,CategoryImgUrl FROM categories';
        connection.query(sql , (error , result) => {
            if (error) return res.json({msg: "There is a Server Error" , Error: error});
            if (result) return res.json({msg: "Data Get Succesfuly" , Data: result});
        })
})

// Import routes
const ProductRoutes = require('./APP/Routes/Admin/ProductRoutes');
const CategoryRoutes = require('./APP/Routes/Admin/CategoryRoutes');
const SubCategoryRoutes = require('./APP/Routes/Admin/SubCategoryRoutes');
const NavBarRouter = require('./APP/Routes/Admin/NabBarRoutes');
const BrandsRoutes = require('./APP/Routes/Admin/BrandsRouter');
const UserRoutes = require('./APP/Routes/Admin/UserRouter');
const BannerRoutes = require('./APP/Routes/Admin/BannerRouter');
const WishListRoutes = require('./APP/Routes/Admin/WishListRoutes');
const CartListRoutes = require('./APP/Routes/Admin/CartListRoutes');
const ReviewRouter = require('./APP/Routes/Admin/ReviewRouter');

// Use routes with prefix
app.use('/api/admin/products', ProductRoutes);
app.use('/api/admin/category' , CategoryRoutes);
app.use('/api/admin/subcategory' , SubCategoryRoutes);
app.use('/api/admin/navbar' , NavBarRouter);
app.use('/api/admin/brand' , BrandsRoutes);
app.use('/api/admin/users', UserRoutes);
app.use('/api/admin/banner' , BannerRoutes);
app.use('/api/admin/wishlist' , WishListRoutes);
app.use('/api/admin/cart' , CartListRoutes);
app.use('/api/admin/review' , ReviewRouter);

// Start server
app.listen(process.env.PORT || 5000, (error) => {
    if (error) throw error;
    console.log(`Server Running on ${process.env.PORT}`);
});
