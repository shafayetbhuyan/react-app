import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './RegistererAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
import axios from 'axios';
function RegistererAdd() {
  const [RegistererData, setRegistererData] = useState({
    psuNo: ''
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleForm = (e) => {
    console.log(e.target.value)
    setRegistererData(

      (formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };
  const authUserSearchParams = {"search.authUser.like":"", "pageNumber" : 1, "pageSize": 500,};
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

    console.log("RegistererData", payload);

    try {
      // Call the Request component to handle the form submission
      PostRequest(RegistererData, '/Registerer/Add/');
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
      <PageHeader value="Registerer Add" />
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
          <InputText label="Registerer" placeholder="" name="registerer" />
          {/* <InputSelect name='search.authUser.like' label='Registerer' dataUrl='http://localhost:8960/api/auth/User/List/' optionLabel='Registerer' optionValue='id' searchParams={authUserSearchParams} /> */}
          <InputText label="Supervisor User" placeholder="" name="supervisorUser" />
          <InputText label="Guardian Name" placeholder="" name="guardianName" />
          <InputText label="Guardian Type" placeholder="" name="guardianType" />
          <InputText label="Mother Name" placeholder="" name="motherName" />
          <InputText label="PSU" placeholder="" name="psu" />
          <InputText label="Address" placeholder="" name="address" />
          <InputText label="Post Office" placeholder="" name="postOffice" />
          <InputText label="Upazila" placeholder="" name="upazila" />
          <InputText label="Khana No" placeholder="" name="khanaNo" />
          <InputText label="Phone" placeholder="" name="phone" />
          <InputText label="Mobile Banking No" placeholder="" name="mobileBankingNo" />
          <InputText label="Mobile Banking Type" placeholder="" name="mobileBankingType" />

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
export default RegistererAdd;