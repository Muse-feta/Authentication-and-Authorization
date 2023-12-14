const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res.status(403).json({status: false, message: "Unauthorized user" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, "This_Is_My_Secret_Key");
    console.log(decoded);
    if(!decoded){
        return res.status(403).json({ status: false, message: "Unauthorized user" });
    }
    if(decoded.role == 'admin'){
        next()
    }else{
        return res.status(403).json({ status: false, message: "only admin" });
    }
  } catch (err) {
    return res.status(403).json({ message: "Unauthorized user" });
  }

  // Continue with the middleware chain or response logic
  next();
};

module.exports = adminMiddleware;
