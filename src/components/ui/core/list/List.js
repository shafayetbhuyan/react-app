import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import style from './List.module.css';
import { fetchData } from '../../../../data/api/DataApi';


export default function List(props) {
    const { columns } = props.data;
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //   try {
        //     const response = await axios.get('http://localhost:3001/api/data');
        //     setData(response.data);
        //   } catch (error) {
        //     console.error('Error fetching data:', error);
        //   }
        // };

        let response = fetchData("http://localhost:8960/api/masterData/Psu/List/", null, null, null);
        response.then(
            (resp) => {
                console.log(resp); // "Success"
                setRows(resp.data.data);
            }
        );

    }, []);

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
                rowsPerPageOptions={[5, 10, 20]}
                // checkboxSelection
                disableRowSelectionOnClick
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? style.even : style.odd
                }
            />
        </Box>
    );
}