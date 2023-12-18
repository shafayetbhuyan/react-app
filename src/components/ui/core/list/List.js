import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import style from './List.module.css';
import { fetchDataList } from '../../../../data/api/DataApi';


export default function List(props) {
    const { dataUrl, columns, searchParams } = props;
    const [rows, setRows] = useState([]);

    useEffect(() => {

        let response = fetchDataList(dataUrl, searchParams, null, null);
        response.then(
            (resp) => {
                console.log(resp); // "Success"
                setRows(resp.data);
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
                            pageSize: 50,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                rowsPerPageOptions={[50, 500, 1000, 5000, 10000]}
                // checkboxSelection
                disableRowSelectionOnClick
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? style.even : style.odd
                }
            />
        </Box>
    );
}