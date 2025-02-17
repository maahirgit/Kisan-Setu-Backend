const userSchema = require("../model/UserModel")
const hashedPassword = require("../util/Encrypt")

const createUser = async(req,res) => {
    const hashed = await hashedPassword.encryptPassword(req.body.Password)
    const user = Object.assign(req.body,{Password : hashed})

    const savedUser = await userSchema.create(user)

    res.status(200).json({
        message : "User Registered Successfully",
        data : savedUser
    })
}

const loginUser = async(req,res) => {
    const email = req.body.Email;
    const password = req.body.Password
    const employeebyemail = await userSchema.findOne({Email : email})

    if(employeebyemail){
        const isMatch = await hashedPassword.comparePassword(password,employeebyemail.Password)
        if(isMatch){
            res.status(200).json({
                message : "User Login Successful"
            })
        }
        else{
            res.status(200).json({
                message : "User Login unsuccessful"
            })
        }
    }
}

module.exports = {
    createUser,
    loginUser
}