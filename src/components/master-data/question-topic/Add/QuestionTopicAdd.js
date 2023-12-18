import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import { useState, useEffect } from "react";
import style from './QuestionTopicAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import axios from 'axios';
function QuestionTopicAdd() {
  const [QuestionTopicData, setQuestionTopicData] = useState({
    psuNo: ''
  });
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleForm = (e) => {
    console.log(e.target.value)
    setQuestionTopicData(

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

    console.log("QuestionTopicData", payload);

    try {
      // Call the Request component to handle the form submission
      PostRequest(QuestionTopicData, '/QuestionTopic/Add/');
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
      <PageHeader value="Question Topic Add" />
      <div className={style.pageContent}>

        <form onSubmit={handleSubmit}>
          
          <InputText label="Schedule" placeholder="" name="schedule" />
          <InputText label="Topic Name" placeholder="" name="topicName" />
          <InputText label="Description" placeholder="" name="description" />
          <InputText label="Display Serial" placeholder="" name="displaySerial" />
          <InputText label="Footer" placeholder="" name="footer" />

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
export default QuestionTopicAdd;