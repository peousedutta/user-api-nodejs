import user from "../model/userModel.js"

export const create = async(req, res)=>{
    try {
        const userData = new user(req.body);
        const {email} = userData;
        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({
                message : "User Already Exist"
            })
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getAllUsers = async(req, res) =>{
    try {
        const usersList = await user.find();
        if(usersList.length === 0){
            return res.status(404).json({
                message : "No user found!"
            })
        }
        res.status(200).json(usersList)
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

