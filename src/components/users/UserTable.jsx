import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import {useTable} from "react-table";
//import {useMemo} from "react";
//import {COLUMNS} from "../../columns/columns.js";


const UserTable = ({users}) => {

    //const columns = useMemo(() => COLUMNS, []);
    // const data = useMemo(() => users, []);
    //const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRows} = useTable({columns, data})
    const headers = ['ID', 'First Name', 'Last Name', 'Maiden Name', 'Age', 'Gender', 'Email', 'Phone', 'Username']
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => <TableCell align="right">{header}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="center">{user.id}</TableCell>
                            <TableCell component="th" scope="row"> {user.firstName} </TableCell>
                            <TableCell align="center">{user.lastName}</TableCell>
                            <TableCell align="center">{user.maidenName}</TableCell>
                            <TableCell align="center">{user.age}</TableCell>
                            <TableCell align="center">{user.gender}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.phone}</TableCell>
                            <TableCell align="center">{user.username}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;