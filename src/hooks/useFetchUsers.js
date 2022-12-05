import {useEffect, useState} from "react";
import axios from 'axios'

function UseFetchUsers({limit, skip,page}) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);


    const getUsers = async () => {
        const URL = `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,lastName,maidenName,age,gender,email,phone,username`
        console.log(URL)
        try {
            setLoading(true);
            const response = await axios.get(URL)
            setUsers(response.data.users)
            setLoading(false)

        } catch (e) {
            setError(true)
        }
    }

    const searchUsers = async (search) => {
        const URL = 'https://dummyjson.com/users'
        try {
            setLoading(true);
            const response = await axios.get(`${URL}/search?q=${search}`)
            setUsers(response.data.users)
            setLoading(false)

        } catch (e) {
            setError(true)
        }
    }
    useEffect(() => {
        getUsers()

    }, [page, limit])


    return {users, loading, error, searchUsers}
}

export default UseFetchUsers;