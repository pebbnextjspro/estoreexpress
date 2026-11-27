const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')
const cookieParser = require("cookie-parser");
const crypto = require('crypto')
const nodemailer = require('nodemailer')

// Load env variables
dotenv.config();
app.use(cookieParser()); // 👈 Ye line add ki hai

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://192.168.70.97:3000", // production mein apni actual frontend URL dein
    credentials: true, // cookies bhejne aur receive karne ke liye zaroori
  }));
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/admin/send-email', async (req, res) => {
  const subject = "Order Alert"
  const formfields = req.body.formfields;
  const cartitems = req.body.cartitems;
  const invoicetotal = req.body.invoicetotal;

  const finalinvoicedata = 
  invoicetotal?.map((data) => `<b>Total Invoice Amount:</b> ${data.TotalInvoiceAmount} </br> 
  <b>Invoice Number:</b> ${data.InvoiceNumber}`).join('/n');
  console.log(finalinvoicedata)

  const productarray = cartitems?.map((data) => 
    `<b>Product Name</b>:${data.ProductName} <b>Product Qty</b>: ${data.TotalQty}</br>`).join('\n');  


  if (!formfields || !subject) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Your Store" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject,

      html: `<div style="background-color: #f4f6f9; padding: 24px; font-family: Arial, Helvetica, sans-serif; color: #1f2937;">
  <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);">
    
    <!-- Header -->
    <div style="background-color: #111827; color: #ffffff; padding: 20px 24px;">
      <h2 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.3px;">
        Order / Notification Alert
      </h2>
    </div>

    <!-- Body -->
    <div style="padding: 24px;">
      
      <!-- Ordered Items -->
      <h3 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">
        Ordered Items
      </h3>
      <div style="margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; background-color: #fafafa;">
        ${productarray}
      </div>

      <!-- Invoice Detail -->
      <h3 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">
        Invoice Detail
      </h3>
      <div style="margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; background-color: #fafafa;">
        ${finalinvoicedata}
      </div>

      <!-- Client Details -->
      <h3 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.5px;">
        Client Details
      </h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 22%;"><strong>First Name:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827; width: 28%;">${formfields.UserFirstName}</td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 22%;"><strong>Last Name:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827; width: 28%;">${formfields.UserLastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Phone:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827;">${formfields.UserPhone}</td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Email:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827;">${formfields.UserEmail}</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>City:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827;">${formfields.UserCity}</td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Country:</strong></td>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827;">${formfields.UserCountry}</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Postal Code:</strong></td>
          <td colspan="3" style="padding: 8px 10px; border-bottom: 1px solid #f3f4f6; color: #111827;">${formfields.UserPostalCode}</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; color: #6b7280; vertical-align: top;"><strong>Home Address:</strong></td>
          <td colspan="3" style="padding: 8px 10px; color: #111827; line-height: 1.5;">${formfields.UserAddress}</td>
        </tr>
      </table>

    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 14px 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
      Automated Order Notification
    </div>

  </div>
</div>`,
    });

   

   

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully!',
      
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

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
