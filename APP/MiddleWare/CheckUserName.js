const connection = require('../Config/db');

const DuplicateUserName = (req , res , next) => {

    const sql = `select UserName from tblusers where UserName = ? LIMIT 1`;

    const {UserName} = req.body;
    connection.query(sql , [UserName] , (error , result) => {

        if (error) return res.status(500).json({success: false , msg: 'DB ERROR'});
        if (result.length !== 0) return res.json({success: false , msg: "User Already Exist"})

            next();
    })
}

const CheckEmailAddress = (req , res , next) => {

    const sql = `select * from tblusers where UserEmail = ?`;
    const {identifier} = req.body;
    connection.query(sql , [identifier] , (error , result) => {
    if (error) return res.status(500).json({success: false , msg: 'DB ERROR'});


    if (result.length === 0)  {

        return res.status(401).json({success: false , msg: "You Are Not Registered.Please Sign Up"})
    } else {
        next();      

    }
    

    })
}

const CheckEmailAddress2 = (req , res , next) => {

    const sql = `select * from tblusers where UserEmail = ?`;
    const {UserEmail} = req.body;
    connection.query(sql , [UserEmail] , (error , result) => {
    if (error) return res.status(500).json({success: false , msg: 'DB ERROR'});


    if (result.length === 0)  {

        return res.json({success: false , msg: "Please Enter Your Registered Email Address."})
    } else {
        next();      

    }
    

    })
}

module.exports = {DuplicateUserName , CheckEmailAddress , CheckEmailAddress2}