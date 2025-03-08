const roleSchema = require('../model/RoleModel')

const createRole = async(req,res) => {
    const role = req.body
    const savedUser = await roleSchema.create(role)

    res.status(200).json({
        message : "Role Create Successfully",
        data : savedUser
    })
}

const getRole = async(req,res) => {
    const getRole = await roleSchema.find()
    if(getRole){
        res.status(200).json({
            message : "Roles Fetched Successfully",
            data : getRole
        })
    }
    else{
        res.status(400).json({
            message : "Error In Fetching Role"
        })
    }
}

module.exports = {
    createRole,
    getRole
}