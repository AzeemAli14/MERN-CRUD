import UserModel from "../model/user-modal.js";

export const addUser = async(request, response) => {
    const user = request.body;
    const userModel = new UserModel(user)
    console.log("user Controller", user)
    try 
    {
        await userModel.save();
        response.status(201).json(userModel)
    }
    catch(error)
    {
        response.status(401).json({message: error.message})
    }
}

export const getUsers = async(request, response) => {
    try 
    {
        const users = await UserModel.find({});
        response.status(200).json(users)
    }
    catch(error)
    {
        response.status(401).json({message: error.message})
    }
}