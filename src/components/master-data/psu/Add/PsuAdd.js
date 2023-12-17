import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './PsuAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
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
          <InputText label="PSU No" placeholder="" name="psuNo" />
          <InputText label="Zila" placeholder="" name="locLocationsDistrictId" />
          {/* <SearchInputSelect name='search.psuNo.like' label='Psu No' dataUrl='http://localhost:8960/api/masterData/Psu/List/' optionLabel='psuNo' optionValue='id' searchParams={psuSearchParams} /> */}
          <InputSelect name='search.psuNo.like' label='District' dataUrl='http://localhost:8960/api/masterData/Psu/List/' optionLabel='psuNo' optionValue='id' searchParams={psuSearchParams} />
          <InputText label="Zila Code" placeholder="" name="zilaCode" />
          <InputText label="Upazila/Thana" placeholder="" name="locLocationsUpazilaId" />
          <InputText label="Upazila/Thana Code" placeholder="" name="upazilaThanaCode" />
          <InputText label="Union/Ward" placeholder="" name="unionWard" />
          <InputText label="Union/Ward Code" placeholder="" name="unionWardCode" />
          <InputText label="Mouza/Moholla" placeholder="" name="mouzaMoholla" />
          <InputText label="Mouza/Moholla Code" placeholder="" name="mouzaMohollaCode" />
          <InputText label="RMO Code" placeholder="" name="rmaCode" />

          <SaveButton />
          
        </form>

      </div>
    </div>

  );
}
export default PsuAdd;