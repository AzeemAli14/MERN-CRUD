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

export const editUser = async(request, response) => {
    console.log(request.params.id);
    const id = request.params.id;
    try 
    {
        const user = await UserModel.find({ id: id });
        // const user = await UserModel.findById(request.params.id);
        response.status(200).json(user)
    }
    catch(error)
    {
        response.status(401).json({message: error.message})
    }
}