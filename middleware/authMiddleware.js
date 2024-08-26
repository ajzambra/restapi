const jwt = require('jsonwebtoken')


const authenticateToken = (req, res, next) => {   
    const token = req.headers['token']; 
    console.log('Token received:', token);
    if (token == null) return res.sendStatus(401);
   
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(408);  
        req.user = user;
        next();
    });
};



module.exports = authenticateToken;