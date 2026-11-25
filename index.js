const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')
const cookieParser = require("cookie-parser");
const crypto = require('crypto')

// Load env variables
dotenv.config();
app.use(cookieParser()); // 👈 Ye line add ki hai

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://192.168.1.109:3000", // production mein apni actual frontend URL dein
    credentials: true, // cookies bhejne aur receive karne ke liye zaroori
  }));
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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
const CookieRoutes = require('./APP/Routes/Admin/CookiesRouter');
const InvoiceRoutes = require('./APP/Routes/Admin/InvoiceRouter');

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
app.use('/api/admin/cookie' , CookieRoutes);
app.use('/api/admin/invoice' , InvoiceRoutes)

// Start server
app.listen(process.env.PORT || 5000, (error) => {
    if (error) throw error;
    console.log(`Server Running on ${process.env.PORT}`);
});
