import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token; 
  if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
  }
  try {
      const token_decode = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userId = token_decode.id;
      req.body.username = token_decode.username; 
      next();
  } catch (error) {
      console.log(error);
      return res.status(401).json({ success: false, message: "Error in token verification" });
  }
};

export default authMiddleware;
