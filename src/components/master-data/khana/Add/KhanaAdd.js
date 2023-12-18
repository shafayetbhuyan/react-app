import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './KhanaAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
import axios from 'axios';
import InputSelectStatic  from  '../../../ui/core/input/InputSelectStatic/InputSelectStatic';


function KhanaAdd() {
  const [khanaData, setKhanaData] = useState({
    psuNo: ''
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const headMemberGenderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
];

  const handleForm = (e) => {
    console.log(e.target.value)
    setKhanaData(

      (formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };
  const psuSearchParams = {"search.psuNo.like":"", "pageNumber" : 1, "pageSize": 500,};
  const requestBody = JSON.stringify({
    "searchFieldList": [],
    "orderByList": [{
      "fieldName": "id",
      "fieldValue": "asc"
    }],
    "pageNumber": 1,
    "pageSize": 3
  });

  var requestOptions = {
    method: 'GET',
    //body: requestBody,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {

    fetch("http://localhost:8960/api/masterData/Locations/List/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));


    // axios.post('http://localhost:8960/api/masterData/Locations/List/', requestBody)
    //   .then(response => 
    //     console.log(response)
    //     // setOptions(response.data)
    //     )
    //   .catch(error => console.error('Error fetching options:', error));
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);

    console.log("KhanaData", payload);

    try {
      // Call the Request component to handle the form submission
      PostRequest(khanaData, '/Khana/Add/');
      // You can perform further actions here if needed
    } catch (error) {
      // Handle errors if needed
    }
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };


  return (
    <div className={style.mainDiv}>
      <PageHeader value="Khana Add" />
      <div className={style.pageContent}>

        <form onSubmit={handleSubmit}>
          {/* <div className={style.inputblock}> */}
          {/* <label className={style.label}>
              PSU No <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="psuNo"
              value={psuData.psuNo}
              onChange={handleForm}
            />
          </div> */}
          {/* <InputText label="PSU No" placeholder="" name="psuNo" /> */}
          <InputSelect name='search.psuNo.like' label='PSU' dataUrl='http://localhost:8960/api/masterData/Psu/List/' optionLabel='psuNo' optionValue='id' searchParams={psuSearchParams} />
          <InputText label="Khana Sl" placeholder="" name="khanaSl" />
          <InputText label="Flat No" placeholder="" name="flatNo" />
          <InputText label="Village" placeholder="" name="village" />
          <InputText label="Phone" placeholder="" name="phone" />
          <InputText label="GPS" placeholder="" name="gps" />
          <InputText label="Head Member Name" placeholder="" name="headMemberName" />
          <InputText label="Head Member Father" placeholder="" name="headMemberFather" />
          <InputText label="Head Member Birth Date" placeholder="" name="headMemberBirthDate" />
          <InputSelectStatic label="Head Member Gender" placeholder="" name="headMemberGender" options={headMemberGenderOptions} />
          <InputText label="Monthly Expense" placeholder="" name="monthlyExpense" />
          <InputText label="Monthly Income" placeholder="" name="monthlyIncome" />

          <div
            className={style.submitButtonWrapper}
          >
            <button className={style.submitButton}>
              SAVE
            </button>
          </div>
        </form>

      </div>
    </div>

  );
}
export default KhanaAdd;