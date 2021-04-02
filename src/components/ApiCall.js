import axios from "axios";
import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';
let result={}

function ApiCall(commonProps){

  const CancelToken = axios.CancelToken.source();
let cancel;

  console.log('common props origin',commonProps.origin);
  const options = {
  method: "GET",
  url:
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/IN/INR/en-IN/${commonProps.origin}/${commonProps.destination}/${commonProps.date}`,
  params: { inboundpartialdate: "" },
  
  cancelToken: CancelToken.token
,
  headers: {
    "x-rapidapi-key": "a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
  }
};

    // const racesResponse = await fetch(RACES).then(res => res.json())



  const calling=async function callin(){
    const dataResult= await axios
  .request(options)
  .then(function (response) {
    console.log('responsess are...',response.data);
    //commonProps.gotIt();
    result=Object.assign(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  //result=dataResult;
  CancelToken.cancel();
  }
  const debouncedSearchAPI = debounce(async () => {
    return await calling()
}, 800, { leading: false });
  debouncedSearchAPI();
  console.log('result displaying...',result);
  return result;

}

export default ApiCall;
