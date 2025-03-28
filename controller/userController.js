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

export const updateUser = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if (!userExist) {
            return res.status(404).json({
                message : "User not found"
            })
        }
        const updateUser = await user.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(201).json(updateUser)
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const deleteUser = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if (!userExist) {
            return res.status(404).json({
                message : "User not found"
            })
        }
        await user.findByIdAndDelete(id)
        res.status(201).json({
            message : "user deleted successfully"
        })
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}
