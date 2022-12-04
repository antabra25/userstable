import {useEffect, useState} from "react";
import axios from 'axios'

function UseFetchUsers() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);
    const URL = 'https://dummyjson.com/users'

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get(URL)
            setUsers(response.data.users)
            setLoading(false)

        } catch (e) {
            setError(true)

        }
    }
    useEffect(() => {
        getUsers()

    }, [])


    return {users, loading, error}
}

export default UseFetchUsers;