import axios from 'axios'

const baseURL = 'http://localhost:8000';

export const addUser = async(user) => {
    try 
    {
        return await axios.post(`${baseURL}/add`, user)
    }
    catch(error)
    {
        console.log("Error while adding user: ",error)
    }
}

export const getUsers = async() => {
    try 
    {
        return await axios.get(`${baseURL}/all`)
    }
    catch(error)
    {
        console.log("Error while getting users: ", error)
    }
}

// export default axios.create({
//     baseURL: 'http://localhost:8000'
// })