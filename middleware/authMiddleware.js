const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = res.cookies.jwt;

    //check json web token exists & is verified 
    if (token) {
        jwt.verify(token, 'dragon12345', (err, decodeToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');

            } else {
                console.log(decodeToken);
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
}

module.exports = {requireAuth}