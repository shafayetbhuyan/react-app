import axios from 'axios';

const prepareSearchParams = (pageSize, pageNumber) => {
    let searchParams = '';

    if(pageSize){
        searchParams += '&pageSize='+ pageSize;
    }else{
        searchParams += '&pageSize=50';
    }
    if(pageNumber){
        searchParams += '&pageNumber='+ pageNumber;
    }

    if (inputString.startsWith('&')) {
        return '?' + inputString.slice(1);
    } else {
        return inputString;
    }

}

const fetchData = async (url, data, pageSize, pageNumber) => {


    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};