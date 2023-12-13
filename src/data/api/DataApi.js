import React, { useState } from 'react';
import axios from 'axios';

const prepareSearchParams = (pageSize, pageNumber, data) => {
    let searchParams = '';
    if(data){
        searchParams = objectToSearchParams(data);
    }
    // if(pageSize){
    //     searchParams += '&per_page='+ pageSize;
    // }else{
    //     searchParams += '&pageSize=50';
    // }
    // if(pageNumber){
    //     searchParams += '&page='+ pageNumber;
    // }

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