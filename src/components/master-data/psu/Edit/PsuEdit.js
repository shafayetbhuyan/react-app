import React, { useState, useEffect , useLayoutEffect } from 'react';
import PageHeader from "../../../layout/page-header/PageHeader";
import style from './PsuEdit.module.css'
import { PostRequest } from '../../../../data/api/DataApi';
import InputText from '../../../ui/core/input/InputText/InputText';
import InputHidden from '../../../ui/core/input/InputHidden/InputHidden';
import { InputSelect } from '../../../ui/core/input/InputSelect/InputSelect';
import { SaveButton } from '../../../ui/core/button/Button';
import { LOCATION_DISTRICT_URL, LOCATION_UPAZILA_URL } from '../../../../utils/ServiceUrls';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../../../data/api/DataApi';
import { PSU_EDIT_POST_URL } from '../../../../utils/ServiceUrls';
import { processRelationData } from '../../../../utils/data/DataProcessUtils';
function PsuEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [dataset, setDataset] = useState(null);

    const zillaSearchParams = { "search.type.equal": "2", "pageNumber": 1, "pageSize": 500, };
    const upazillaSearchParams = { "search.type.equal": "4", "pageNumber": 1, "pageSize": 500, };

    //Fetch Initial Data for Edit Page
    useEffect(() => {
        let response = getData(process.env.REACT_APP_MASTER_DATA_BASE_URL + PSU_EDIT_POST_URL + id + "/", null, null, null);
        response.then(
            (res) => {
                if (res.status === 'success' && res.responseCode == 1000) {
                    setDataset(res.data);
                    console.log("heeeeeeeeeeeeeeeelllllllllllllllllllllllll");
                    // <InputSelect label='Zila' name="locLocationsDistrict.id" dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL + "" + LOCATION_DISTRICT_URL} optionLabel='name' optionValue='id' searchParams={zillaSearchParams} defaultValue={dataset.locLocationsDistrict} />
                    
                }
            }
        );

    }, []);

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData);

        let data = processRelationData(payload);

        try {
            let res = await PostRequest(data, '/Psu/Edit/' + id + '/');

            if (res.status === 'success' && res.responseCode == 1000) {
                navigate('/master-data/Psu/List/');
            }
        } catch (error) {
            console.log("Error while saving data");
            navigate('/master-data/Psu/Edit/' + id + '/');
        }
    };

    return (
        <div className={style.mainDiv}>
            { dataset ?
            <>
            <PageHeader value="PSU Edit" />
            <div className={style.pageContent}>

                <form onSubmit={handleSubmit}>
                    <InputHidden label="Id" placeholder="" name="id" defaultValue={dataset.id} />
                    <InputText label="PSU No" placeholder="" name="psuNo" defaultValue={dataset.psuNo} required={true} />
                    <InputSelect label='Zila' name="locLocationsDistrict.id" dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL + "" + LOCATION_DISTRICT_URL} optionLabel='name' optionValue='id' searchParams={zillaSearchParams}  defaultValue={dataset.locLocationsDistrict}/>
                    <InputText label="Zila Code" placeholder="" name="zilaCode" defaultValue={dataset.zilaCode} />
                    <InputSelect label='Upazila/Thana' placeholder="" name="locLocationsUpazila.id" dataUrl={process.env.REACT_APP_MASTER_DATA_BASE_URL + "" + LOCATION_UPAZILA_URL} optionLabel='name' optionValue='id' searchParams={upazillaSearchParams} defaultValue={dataset.locLocationsUpazila}/>
                    <InputText label="Upazila/Thana Code" placeholder="" name="upazilaThanaCode" defaultValue={dataset.upazilaThanaCode} />
                    <InputText label="Union/Ward" placeholder="" name="unionWard" defaultValue={dataset.unionWard} />
                    <InputText label="Union/Ward Code" placeholder="" name="unionWardCode" defaultValue={dataset.unionWardCode} />
                    <InputText label="Mouza/Moholla" placeholder="" name="mouzaMoholla" defaultValue={dataset.mouzaMoholla} />
                    <InputText label="Mouza/Moholla Code" placeholder="" name="mouzaMohollaCode" defaultValue={dataset.mouzaMohollaCode} />
                    <InputText label="RMO Code" placeholder="" name="rmaCode" defaultValue={dataset.rmaCode} />

                    <SaveButton />

                </form>
            </div>
            </> 
            : 
            <>
            <h1>Loading...</h1>
            </>
            }
        </div>

    );
}
export default PsuEdit;