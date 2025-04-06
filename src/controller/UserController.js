const userSchemaModel = require("../model/UserModel");
const hashedPassword = require("../util/Encrypt");
const jwt = require('jsonwebtoken');
const secretKey = 'kisanSetu';

const createUser = async (req, res) => {
    try {
        const hashed = await hashedPassword.encryptPassword(req.body.Password);
        const user = Object.assign(req.body, { Password: hashed });

        if (!req.body.RoleId) {
            return res.status(400).json({ message: "RoleId is required." });
        }
        user.Role_id = req.body.RoleId;

        const savedUser = await userSchemaModel.create(user);
        res.status(200).json({ message: "User Registered Successfully", data: savedUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to register user." });
    }
};

const loginUser = async (req, res) => {
    try {
        const email = req.body.Email;
        const password = req.body.Password;
        const roleId = req.body.RoleId;

        const user = await userSchemaModel.findOne({ Email: email });

        if (user) {
            if (user.Role_id.toString() !== roleId) {
                return res.status(401).json({ message: "Role ID mismatch." });
            }

            const isMatch = await hashedPassword.comparePassword(password, user.Password);
            if (isMatch) {
                const token = jwt.sign({ userId: user._id, email: user.Email }, secretKey, { expiresIn: '1h' });
                res.status(200).json({ message: "User Login Successful", token: token });
            } else {
                res.status(401).json({ message: "User Login unsuccessful" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Login failed due to server error." });
    }
};

const getUser = async (req, res) => {
    try {
        const savedUser = await userSchemaModel.find().populate('Role_id');
        if (savedUser && savedUser.length > 0) {
            res.status(200).json({ message: "Users Fetched Successfully", data: savedUser });
        } else {
            res.status(404).json({ message: "No users found" });
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to fetch users." });
    }
};

module.exports = { createUser, loginUser, getUser };