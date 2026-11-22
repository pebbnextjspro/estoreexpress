const crypto = require('crypto')

let SendCookies = (req, res) => {

    let visitorId = req.cookies.visitor_id;

    console.log('oldvisitorid' , visitorId)

    if (!visitorId) {

        const crypto = require("crypto");

        visitorId = (crypto.randomUUID()+'-'+Date.now());
        

        res.cookie("visitor_id", visitorId, {
            httpOnly: true,
            secure: false, // Local HTTP development
            sameSite: "lax",
            maxAge: 365 * 24 * 60 * 60 * 1000,
            path: "/"
        });

        console.log("New Visitor:", visitorId);

    } else {

        console.log("Returning Visitor:", visitorId);

    }

    res.json({
        success: true,
        visitorId,
        message: "Visitor tracked successfully"
    });
}

module.exports={SendCookies}