import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './PsuAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import axios from 'axios';
function PsuAdd() {
  const [psuData, setPsuData] = useState({
    psuNo: '',
    zila: '',
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleForm = (e) => {
    console.log(e.target.value)
    setPsuData(

      (formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };
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

    console.log("PsuData", payload);

    try {
      // Call the Request component to handle the form submission
      PostRequest(psuData, '/Psu/Add/');
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
      <PageHeader value="PSU Add" />
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
          <InputText label="PSU No" placeholder="" name="psuNo" />
          <InputText label="Zila" placeholder="" name="locLocationsDistrictId" />
          <InputText label="Zila Code" placeholder="" name="zilaCode" />
          <InputText label="Upazila/Thana" placeholder="" name="locLocationsUpazilaId" />
          <InputText label="Upazila/Thana Code" placeholder="" name="upazilaThanaCode" />
          <InputText label="Union/Ward" placeholder="" name="unionWard" />
          <InputText label="Union/Ward Code" placeholder="" name="unionWardCode" />
          <InputText label="Mouza/Moholla" placeholder="" name="mouzaMoholla" />
          <InputText label="Mouza/Moholla Code" placeholder="" name="mouzaMohollaCode" />
          <InputText label="RMO Code" placeholder="" name="rmaCode" />

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
export default PsuAdd;