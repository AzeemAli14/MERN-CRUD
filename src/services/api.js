import axios from 'axios'

const baseURL = 'http://localhost:5000';

export const addUser = async(user) => {
    try 
    {
        return await axios.post(`${baseURL}/users`, user)
    }
    catch(error)
    {
        console.log(error)
    }
}

export default axios.create({
    baseURL: 'http://localhost:5000'
})