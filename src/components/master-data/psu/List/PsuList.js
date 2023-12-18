import React, { useState } from 'react';
import List from "../../../ui/core/list/List";
import PageHeader from "../../../layout/page-header/PageHeader";
import style from './PsuList.module.css'
import { SearchFormButtons } from '../../../ui/core/button/Button';
import  { SearchInput, SearchInputSelect } from '../../../ui/core/input/SearchInput';


const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        headerAlign: 'center',
    },
    {
        field: 'psuNo',
        headerName: 'PSU No',
        width: 150,
        editable: false,
        headerAlign: 'center',
        resizable: true
    },
    {
        field: 'locLocationsDistrict',
        headerName: 'Zila',
        width: 150,
        editable: false,
        headerAlign: 'center',
        resizable: true,
        valueGetter: (params) => { 
            if(params.row.locLocationsDistrict){
                return `${params.row.locLocationsDistrict.name}` ;
            }else{
                return ``;
            }
        },
    },
    {
        field: 'zilaCode',
        headerName: 'Zila Code',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'locLocationsUpazila',
        headerName: 'Upazila/Thana',
        width: 150,
        editable: false,
        headerAlign: 'center',
        valueGetter: (params) => { 
            if(params.row.locLocationsUpazila){
                return `${params.row.locLocationsUpazila.name}` ;
            }else{
                return ``;
            }
        },
    },
    {
        field: 'upazilaThanaCode',
        headerName: 'Upazila/Thana Code',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'unionWard',
        headerName: 'Union/Ward',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'unionWardCode',
        headerName: 'Union/Ward Code',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'mouzaMoholla',
        headerName: 'Mouza Moholla',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'mouzaMohollaCode',
        headerName: 'Mouza Moholla Code',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'rmaCode',
        headerName: 'RMO Code',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },
];


export default function PsuList() {

    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        console.log(payload);
    }

    const psuSearchParams = {"search.psuNo.like":"", "pageNumber" : 1, "pageSize": 500,};

    const listSearchParams = {"pageNumber" : 1, "pageSize": 50,};

    return (
        <>
            <PageHeader value='PSU List' />

            <form className={style.searchForm} onSubmit={submitForm}>

                <SearchInput name='search.firstName.contains' label='First Name'/>
                <SearchInput name='search.lastName.contains' label='Last Name'/>
                <SearchInputSelect name='search.psuNo.like' label='Psu No' dataUrl='http://localhost:8960/api/masterData/Psu/List/' optionLabel='psuNo' optionValue='id' searchParams={psuSearchParams} />

                <SearchFormButtons />

            </form>

            <List columns={columns} dataUrl='http://localhost:8960/api/masterData/Psu/List/' searchParams={listSearchParams} />
        </>
    );
}