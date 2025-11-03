import User from "../../models/userModel.js";
import bcrypt from "bcrypt";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;




export const register = async (req, res) => {    
    try {
        const { name, email, password } = req.body;
        if (!name) res.status(404).send({ message: "Name not found!" })
        if (!email) res.status(404).send({ message: "email not found" })
        if (!password) res.status(404).send({ message: "password not found" })

        if (!emailRegex.test(email)) return res.status(400).send({ message: "Invalid email" })
        if (!passwordRegex.test(password)) return res.status(400).send({ message: "Invalid Password" })

        let existUser = await User.findOne({ email })
        if (existUser) res.status(400).send({ message: "user already registered" })

        let hashedPassword = await bcrypt.hash(password, 10);

        let newUser = await User.create({ name, email, password: hashedPassword })
        res.status(201).send({ message: "user registered successfully", newUser: newUser })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
}







