import UserTable from "./UserTable.jsx";
import useFetchUsers from "../../hooks/useFetchUsers.js";
import usePagination from "../../hooks/usePagination.js";
import Loading from "../common/Loading.jsx";
import {TextField, Pagination, Box, Typography} from '@mui/material'
import {useState} from "react";


const Users = () => {
    const {page,handleChange,limit,skip}= usePagination();
    const {users, loading, error, searchUsers} = useFetchUsers({limit,skip,page});
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchUsers(search);
    }
    return (<>
            <Box sx={{
                marginTop: '1rem',
                marginLeft: '1rem',
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '1rem'
            }}>

                <TextField variant="standard" label="Search.." value={search} onChange={(e) => handleSearch(e)}
                           sx={{
                               width: '250px'
                           }}/>
                <UserTable users={users}/>
                {loading && <Loading/>}
                {error && <Typography variant="h5">Error</Typography>}
                <Pagination count={3} page={page} onChange={handleChange} color="secondary"/>
            </Box>

        </>

    )
}

export default Users;