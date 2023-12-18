import React, {useState, useEffect} from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import style from './PsuEdit.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import InputHidden from '../../../ui/core/input/InputHidden/InputHidden';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
import { LOCATION_DISTRICT_URL , LOCATION_UPAZILA_URL} from '../../../../utils/ServiceUrls';
import { useNavigate, useParams } from 'react-router-dom';
import { getData} from '../../../../data/api/DataApi';
import { PSU_EDIT_POST_URL } from '../../../../utils/ServiceUrls';

function PsuEdit() {

    const [formData, setFormData] = useState({
        id: '',
        psuNo: '',
        locLocationsDistrictId: '',
        zilaCode: '',
        locLocationsUpazilaId: '',
        upazilaThanaCode: '',
        unionWard: '',
        unionWardCode: '',
        mouzaMoholla: '',
        mouzaMohollaCode: '',
        rmaCode: '',
      });

      useEffect(() => {
        let response = getData(process.env.REACT_APP_MASTER_DATA_BASE_URL+PSU_EDIT_POST_URL+id+"/", null, null, null);
        response.then(
            (res) => {
                if(res.status === 'success' && res.responseCode==1000){
                    setFormData(res.data);
                }
                
            }
        );

      }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const zillaSearchParams = {"search.type.equal":"2", "pageNumber" : 1, "pageSize": 500,};
  const upazillaSearchParams = {"search.type.equal":"4", "pageNumber" : 1, "pageSize": 500,};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    console.log("payload",payload)
    try {
      let data = await PostRequest(payload, '/Psu/Edit/'+id+'/');

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
      <PageHeader value="PSU Edit" />
      <div className={style.pageContent}>

        <form onSubmit={handleSubmit}>
          <InputHidden label="Id" placeholder="" name="id" defaultValue={formData.id}  />
          <InputText label="PSU No" placeholder="" name="psuNo" defaultValue={formData.psuNo} required={true}/>
          <InputSelect label='Zila' name="locLocationsDistrictId"  dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL+""+LOCATION_DISTRICT_URL} optionLabel='name' optionValue='id' searchParams={zillaSearchParams}/>
          <InputText label="Zila Code" placeholder="" name="zilaCode" defaultValue={formData.zilaCode}/>
          <InputSelect label='Upazila/Thana' placeholder="" name="locLocationsUpazilaId"  dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL+""+LOCATION_UPAZILA_URL} optionLabel='name' optionValue='id' searchParams={upazillaSearchParams}/>
          <InputText label="Upazila/Thana Code" placeholder="" name="upazilaThanaCode" defaultValue={formData.upazilaThanaCode}/>
          <InputText label="Union/Ward" placeholder="" name="unionWard" defaultValue={formData.unionWard}/>
          <InputText label="Union/Ward Code" placeholder="" name="unionWardCode" defaultValue={formData.unionWardCode}/>
          <InputText label="Mouza/Moholla" placeholder="" name="mouzaMoholla" defaultValue={formData.mouzaMoholla}/>
          <InputText label="Mouza/Moholla Code" placeholder="" name="mouzaMohollaCode" defaultValue={formData.mouzaMohollaCode}/>
          <InputText label="RMO Code" placeholder="" name="rmaCode" defaultValue={formData.rmaCode}/>

          <SaveButton />
          
        </form>

      </div>
    </div>

  );
}
export default PsuEdit;