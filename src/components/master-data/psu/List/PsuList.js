import React, { useState } from 'react';
import List from "../../../list/List";
import PageHeader from "../../../page-header/PageHeader";
import style from './PsuList.module.css'
import { SearchFormButtons } from '../../../button/Button';

import Select from 'react-select';
const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];

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

export default function PsuList() {

    const submitForm = (e) =>{
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        console.log(payload);
    }

    const data = {
        columns: columns,
        rows: rows
    }

    return (
        <>
            <PageHeader value='PSU List' />

            <form className={style.searchForm} onSubmit={submitForm}>
                <div className={style.input} >
                    <label className={`${style.inputLabel} `} >First Name</label>
                    <input type="text" name='firstName' className={style.inputField} />
                </div>
                <div className={style.input} >
                    <label className={style.inputLabel} >Last Name</label>
                    <input type="text" name='lastName' className={style.inputField} />
                </div>
                <div className={style.input} >
                    <label className={style.inputLabel} >Select</label>
                    <Select options={aquaticCreatures} className={style.inputSelect} name='select' />
                </div>

                <SearchFormButtons />

            </form>

            <List data={data} />
        </>
    );
}