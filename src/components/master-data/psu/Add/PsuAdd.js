import React from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import style from './PsuAdd.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
import {  LOCATION_DISTRICT_URL , LOCATION_UPAZILA_URL} from '../../../../utils/ServiceUrls';
import { useNavigate } from 'react-router-dom';
import { PSU_ADD_URL } from '../../../../utils/ServiceUrls';

function PsuAdd() {

  const navigate = useNavigate();

  const zillaSearchParams = {"search.type.equal":"2", "pageNumber" : 1, "pageSize": 500,};
  const upazillaSearchParams = {"search.type.equal":"4", "pageNumber" : 1, "pageSize": 500,};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    try {
      let data = await PostRequest(payload, PSU_ADD_URL);

     if(data.status==='success' && data.responseCode==1000){
      navigate('/master-data/Psu/List/');
     }
    } catch (error) {
      console.log("Error while saving data");
      navigate('/master-data/Psu/Add/');
    }
  };

  return (
    <div className={style.mainDiv}>
      <PageHeader value="PSU Add" />
      <div className={style.pageContent}>

        <form onSubmit={handleSubmit}>
          <InputText label="PSU No" placeholder="" name="psuNo" required={true}/>
          <InputSelect label='Zila' name="locLocationsDistrict.id"  dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL+""+LOCATION_DISTRICT_URL} optionLabel='name' optionValue='id' searchParams={zillaSearchParams}/>
          <InputText label="Zila Code" placeholder="" name="zilaCode" />
          <InputSelect label='Upazila/Thana' placeholder="" name="locLocationsUpazilaId"  dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL+""+LOCATION_UPAZILA_URL} optionLabel='name' optionValue='id' searchParams={upazillaSearchParams}/>
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