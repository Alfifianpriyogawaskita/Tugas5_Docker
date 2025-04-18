import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (eror){
        console.log(eror.masage);

    }
}

export const getUsersById = async(req, res) =>{
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (eror){
        console.log(eror.masage);

    }
}

export const createUser = async(req, res) =>{
    try{
        await User.create(req.body);
        res.status(201).json({msg: "user created"});
    } catch (eror){
        console.log(eror.masage);

    }
}

export const updateUser = async(req, res) =>{
    try{
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user updated"});
    } catch (eror){
        console.log(eror.masage);

    }
}

export const deleteUser = async(req, res) =>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user deleted"});
    } catch (eror){
        console.log(eror.masage);

    }
}