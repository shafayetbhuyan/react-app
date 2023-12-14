import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './PsuAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
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
      "fieldName":"id",
      "fieldValue":"asc"
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

    console.log("PsuData", psuData);
    try {
      // Call the Request component to handle the form submission
       PostRequest(psuData,'/Psu/Add/');
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
          <div className={style.inputblock}>
            <label className={style.label}>
              PSU No <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="psuNo"
              value={psuData.psuNo}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
              Zila <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="locLocationsDistrictId"
              value={psuData.locLocationsDistrictId}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
              Zila Code <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="zilaCode"
              value={psuData.zilaCode}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
              Upazila/Thana <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="locLocationsUpazilaId"
              value={psuData.locLocationsUpazilaId}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            Upazila/Thana Code <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="upazilaThanaCode"
              value={psuData.upazilaThanaCode}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            Union/Ward <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="unionWard"
              value={psuData.unionWard}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            Union/Ward Code <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="unionWardCode"
              value={psuData.unionWardCode}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            Mouza/Moholla <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="mouzaMoholla"
              value={psuData.mouzaMoholla}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            Mouza/Moholla Code <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="mouzaMohollaCode"
              value={psuData.mouzaMohollaCode}
              onChange={handleForm}
            />
          </div>
          <div className={style.inputblock}>
            <label className={style.label}>
            RMO Code <span className={style.requiredLabel}>*</span>
            </label>
            <input
              className={style.input}
              type="text"
              name="rmaCode"
              value={psuData.rmaCode}
              onChange={handleForm}
            />
          </div>
      <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Select an option</option>
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
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