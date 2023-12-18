import axios from 'axios';

const prepareSearchParams = (pageSize, pageNumber, data) => {
    let searchParams = '';
    if(data){
        searchParams = objectToSearchParams(data);
    }
    if(pageSize){
        searchParams += '&pageSize='+ pageSize;
    }else{
        searchParams += '&pageSize=50';
    }
    if(pageNumber){
        searchParams += '&pageNumber='+ pageNumber;
    }

    if (searchParams.startsWith('&')) {
        return '?' + searchParams.slice(1);
    } else {
        return '?'+searchParams;
    }
}

const  objectToSearchParams = (obj) => {
    const params = new URLSearchParams();
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key]) {
            params.append(key, obj[key]);
        }
    }
    return params.toString();
}


export const fetchData = async (url, data, pageSize, pageNumber) => {
    url += prepareSearchParams(pageSize, pageNumber, data);
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

export const fetchDataList = async (url, data, pageSize, pageNumber) => {
    url += prepareSearchParams(pageSize, pageNumber, data);
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

export const PostRequest = async (formData,url) => {
    try {
      const response = await axios.post(process.env.REACT_APP_MASTER_DATA_BASE_URL+url, formData);
      console.log('Form data successfully sent to the server:');
      return response.data;
    } catch (error) {
      console.error('An error occurred while sending form data:', error);
      throw error;
    }
  };

  export const getData = async (url, data, pageSize, pageNumber) => {
    url += prepareSearchParams(pageSize, pageNumber, data);
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};