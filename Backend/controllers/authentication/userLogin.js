import User from "../../models/userModel.js";


import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;



export const logIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email) return res.status(404).send({ message: "please provide email" });
      if (!password) return res.status(404).send({ message: "please provide password" });
  
      if (!emailRegex.test(email)) return res.status(400).send({ message: "Invalid email" });
      if (!passwordRegex.test(password)) return res.status(400).send({ message: "Invalid Password" });
  
      let existUser = await User.findOne({ email });
      if (!existUser) return res.status(404).send({ message: "user not found please register first" });
  
      let comparePassword = await bcrypt.compare(password, existUser.password);
      if (!comparePassword) return res.status(400).send({ message: "Invalid password or password mismatched" });
  
      let payload = {
        userId: existUser._id,
        email: email
      };
  
      const token = jwt.sign(payload, "This is a secret key"); // optional expiry
  
      return res.status(200).send({
        message: "token generated successfully",
        token: token,
        user: { id: existUser._id, email: existUser.email } // helpful for frontend
      });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error", error: error.message });
    }
  };
  