const express = require('express');
const connection = require('../../Config/db');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { Verification_Email_Template } = require('../../MiddleWare/EmailTemplate');

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {

        user: "shahidcitc@gmail.com",
        pass: "gwas vsey twfe uaow"
    }

})

const UserList = (req , res) => {

    const sql = `Select * From tblusers where UserId = ?`;
    const id = req.params.id;

    connection.query(sql , [id], (error , result) => {

        if (error) res.stats(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) res.status(200).json({success: true , msg: "List Get Successfully" , Data: result});
    })
}

const GetUserData = (req , res) => {

    const sql = `Select * From tblusers order by UserName`;
    connection.query(sql , (error , result) => {
        console.log(error);

        if (error) return res.status(500).json({success: false , msg:"DB Error", Error: error});
        if (result) return res.status(200).json({success: true , msg: "Data Get Succesfully" , Data: result});
    })
    
};

let DeleteUserData = (req , res) => {

    const sql = `Delete From tblusers Where UserId IN (?)`;

    const {ids} = req.body;

    if (!ids || ids.length === 0) {

        return res.status(400).json({success: false , msg: 'No Ids Provided'});
    }

    connection.query(sql , [ids] , (error , result) => {
        console.log(error);

        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true, msg: 'Row Deleted Succesfully' , Data: result});
    })
}


let CreateUser = async (req, res) => {

  const sql = `INSERT INTO tblusers 
  (UserName , UserPassword , UserEmail , IsActive , UserImages , ConfirmationCode ,UserPhone) 
  VALUES (?,?,?,?,?,?,?)`;

  if (!req.file) {
    return res.json({ success: false, msg: 'No images are attached' });
  }

  try {

    const { UserName, UserPassword, UserEmail , UserPhone } = req.body;

    const hashpassword = await bcrypt.hash(UserPassword, 10);

    const randomnumber = Math.floor(10000 + Math.random() * 90000);

    const images = req.file.filename;

    connection.query(
      sql,
      [UserName, hashpassword, UserEmail, false, images, randomnumber , UserPhone],
      async (error, result) => {

        if (error)
            console.log(error);
          return res.status(500).json({ success: false, msg: 'DB Error' });

        // ✅ Send confirmation email
        await transporter.sendMail({
          from: '"Your App Name" <shahidcitc@gmail.com>',
          to: UserEmail,
          subject: "Account Confirmation Code",
          html: Verification_Email_Template.replace("{verificationCode}" , randomnumber)
        });

        return res.status(200).json({
          success: true,
          msg: 'User Created Successfully. Confirmation email sent.'
        });
      }
    );

  } catch (err) {
    return res.status(500).json({ success: false, msg: "Server Error/Bcrypty Error" });
  }
};


let UpdateUser = async (req , res) => {

    const sql = `Update tblusers SET UserName=? , UserPassword=? , UserEmail=? , UserPhone=?,
    UserAddress=? , UserCity=? , UserCountry=? Where UserId = ?`;
    const {UserName , UserPassword , UserEmail , UserPhone,UserAddress,UserCity,UserCountry} = req.body;
    const hashpassword = await bcrypt.hash(UserPassword , 10);
    const id = req.params.id;
    

    connection.query(sql , [ UserName , hashpassword , UserEmail ,UserPhone,UserAddress,UserCity,UserCountry,id] ,
     (error , result) => {

        console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Updated Succesfully' , Data: result})
     
    })
}

let ConfirmCode = (req , res) => {

    const sql = `SELECT * FROM tblusers WHERE ConfirmationCode = ? LIMIT 1`;
    const updatequery = `Update tblusers SET IsActive = 1 Where ConfirmationCode = ?`

    const {ConfirmationCode} = req.body;
    console.log(req.body);

    connection.query(sql , [ConfirmationCode] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
        console.log(error);
        if (result.length > 0) {

            return res.status(200).json({success: true , msg: "Your Code is ok. Please Login" , Data: result}) && 
            connection.query(updatequery , [ConfirmationCode])
            
        } else {

            return res.status(500).json({success: false , msg: "Incorrect Code" , Error: error});
        }

    });

     
}

let ConfirmCodeAgain = (req , res) => {

    const sql = `SELECT * FROM tblusers WHERE ConfirmationCode = ? LIMIT 1`;

    const {ConfirmationCode} = req.body;
    console.log(req.body);

    connection.query(sql , [ConfirmationCode] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: "DB Error" , Error: error});
        console.log(error);
        if (result.length > 0) {

            return res.status(200).json({success: true , msg: "Your Code is ok. Please Reset Password" , Data: result})
            
        } else {

            return res.status(500).json({success: false , msg: "Incorrect Code" , Error: error});
        }

    });

     
}

let ResendCode = async (req , res) => {

    

        const sql = `update tblusers set ConfirmationCode = ? where UserEmail = ?`;

    const randomnumber = Math.floor(10000 + Math.random() * 99999);
    const {UserEmail} = req.body;

    connection.query(sql , [randomnumber , UserEmail] , async (error , result) => {

          if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        
            try {

                await transporter.sendMail({
                subject: "Resend Code",
                from: "shahidcitc@gmail.com",
                to: UserEmail,
                html: Verification_Email_Template.replace("{verificationCode}" , randomnumber)
            });

            return res.status(200).json({success: true , msg: "Confirmaiton Email Has Been Sent" , Data: result});

                
            } catch (error) {

                console.log(error);
        return res.status(500).json({success: false , msg: "Internet Issue/Server Not Responding" , Error: error})
        
                
            }     

    })
        
   }

   let CheckUserNamePassword = (req , res) => {

    const sql = `SELECT * FROM tblusers WHERE UserEmail = ? Limit 1`;
    const {UserEmail , UserPassword} = req.body;
    //const comparepassword = bcrypt.compare("")

    connection.query(sql , [UserEmail] , async (error , result) => {

    if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});

    const user = result[0];
    // const comparepassword = await bcrypt.compare(UserPassword , user.UserPassword);
    const comparepassword = UserPassword;

    if (!comparepassword) {

        return res.status(500).json({success: false , msg: "Password is Incorrect"});
    } else {

        return res.status(201).json({success: true , msg: "You Are Logged In Succesfuly" , Data: result})

    }

    
    // if (result.length > 0) {

    //     return res.status(201).json({success: true , msg: "You Are Logged In Succesfuly"})
    // }  else {

    //     return res.status(500).json({success: false , msg: "User Name/Password is Incorrect"});

    // }  

    })
   }

  let CheckUserNamePasswordNext = (req, res) => {

    console.log("Request Body:", req.body);

    const { identifier ,password  } = req.body;

    console.log(identifier ,password);

    const sql = `
        SELECT * FROM tblusers
        WHERE  UserEmail = ? AND UserPassword = ?
    `;

    connection.query(sql, [ identifier ,password], (error, result) => {

        if (error) {
            return res.status(500).json({
                success: false,
                msg: "DB Error",
                Error: error
            });
        }

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                msg: "Login Successful",
                Data: result
            });
        }

        return res.status(401).json({
            success: false,
            msg: "Invalid Email or Password"
        });
    });
};


let ResetCodeEmail = async (req , res) => {

   try {

    const sql = `update tblusers set ConfirmationCode = ? where UserEmail = ?`

     const {UserEmail} = req.body;
    const randomnumber = Math.floor(10000 + Math.random() * 99999);

    const responseemail = await transporter.sendMail({
        from: "shahidcitc@gmail.com",
        to: UserEmail,
        subject: "Reset Password Verification Code",
        html: Verification_Email_Template.replace("{verificationCode}" , randomnumber)
    });

   if (responseemail) {

    connection.query(sql , [randomnumber , UserEmail] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Data Updated Succesfully' , Data: result})    

    })

   } else {

    res.json({success: false , msg: "Code Not Send and Updated"})
   }

    
   } catch (error) {

    console.log(error);
        res.json({success: false , msg: "Code Not Send and Updated"});

    
   }

}

const UpdatePassword = async (req , res) => {

    const sql = `update tblusers set UserPassword = ? where UserEmail = ?`;
    const {newpassword} = req.body;
    const useremail = req.params.useremail;

    const hashpassword = await bcrypt.hash(newpassword , 10);
    console.log(hashpassword);
    console.log(req.body);

    connection.query(sql , [hashpassword , useremail] , (error , result) => {

        console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Password Updated Succesfully' , Data: result})    
 
    })
}

let UserImageUpdate = (req , res) => {

     if (!req.file) {
        return res.status(400).json({
            success: false,
            msg: "No file uploaded"
        });
    }


    const sql = `update tblusers set UserImages=? where UserId=?`;
    const UserImage = req.file.filename;
    const id = req.params.id;

    connection.query(sql , [UserImage , id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Password Updated Succesfully' , Data: result})    
 

    })
}

let UsercreateNext = (req , res) => {

    const sql = `insert into tblusers (
    UserName,
    UserPassword,
    UserEmail,
    UserCountry,
    UserFirstName,
    UserLastName,
    UserAddress,
    UserCity,
    UserPostalCode,
    UserPhone,
    userId) values (?,?,?,?,?,?,?,?,?,?,?)`;
    const id = req.params.id;
    const {
    UserName,
    UserPassword,
    UserEmail,
    UserCountry,
    UserFirstName,
    UserLastName,
    UserAddress,
    UserCity,
    UserPostalCode,
    UserPhone} = req.body;
    
    connection.query(sql , [
    UserName,
    UserPassword,
    UserEmail,
    UserCountry,
    UserFirstName,
    UserLastName,
    UserAddress,
    UserCity,
    UserPostalCode,
    UserPhone,id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'User Added Succesfully' , Data: result})  

    })
}

let AddressUpdateNext = (req , res) => {

    const sql = `update tblusers set 
    UserName=?,UserPassword=?,UserEmail=?, UserCountry=?, UserFirstName=?,UserLastName=?, UserAddress=?, UserCity=?,
    UserPostalCode=?, UserPhone=? where UserId = ?`;
    const id = req.params.id;
    const {
    UserName,
    UserPassword,
    UserEmail,
    UserCountry,
    UserFirstName,
    UserLastName,
    UserAddress,
    UserCity,
    UserPostalCode,
    UserPhone} = req.body;
    
    connection.query(sql , [
    UserName,
    UserPassword,
    UserEmail,
    UserCountry,
    UserFirstName,
    UserLastName,
    UserAddress,
    UserCity,
    UserPostalCode,
    UserPhone,id] , (error , result) => {

         console.log(error);
        if (error) return res.status(500).json({success: false , msg: 'DB Error' , Error: error});
        if (result) return res.status(200).json({success: true , msg: 'Address Updated Succesfully' , Data: result})  

    })
}

module.exports = {GetUserData , DeleteUserData, CreateUser , UpdateUser , ConfirmCode , ResendCode ,
    ConfirmCodeAgain, CheckUserNamePassword , ResetCodeEmail , UpdatePassword , UserList , UserImageUpdate
    ,CheckUserNamePasswordNext, UsercreateNext, AddressUpdateNext}