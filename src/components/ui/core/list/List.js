import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import style from './List.module.css';

/*
const columns = [
    { 
        field: 'id',
        headerName: 'ID',
        width: 90,
        headerAlign: 'center', 
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
        headerAlign: 'center',
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
        headerAlign: 'center',
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
        headerAlign: 'center',
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        headerAlign: 'center',
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

*/

export default function List(props) {
    const { rows, columns } = props.data;

    return (
        <Box sx={{
            height: 700,
            width: '100%',
            '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#E0E0E0',
                maxHeight: '40px !important',
                minHeight: '40px !important'
            },
            '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: '600 !important'
            },
            "& .MuiDataGrid-cell": {
                border: 'solid 1px #c1c1c1',
                borderRight: 0,
                borderTop: 0,
                borderBottom: 0,
            },
            "& .MuiDataGrid-row:hover": {
                backgroundColor: '#ebebeb'
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: '#E0E0E0',
                maxHeight: '40px !important',
                minHeight: '40px !important'
            },
            "& .MuiBox-root": {
                borderRadius: 5
            }

        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowHeight={30}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                // checkboxSelection
                disableRowSelectionOnClick
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? style.even : style.odd
                }
            />
        </Box>
    );
}