
import axios from "axios";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiCall from './ApiCall'

// const options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-UK/BOM-sky/AMD-sky/2021-03-21',
//   params: {inboundpartialdate: '2019-12-01'},
//   headers: {
//     'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
// };

// try{axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });}
// catch(err){
//     console.log(err);
// }

function Result(props) {
    // const [price,setPrice]=useState('n/A')
    const [dataInputs,setDataInputs]=useState({})
//     const [flightName,setFlightName]=useState('n/A');
//     const [fromCode,setFromCode]=useState('n/A');
//     const [toCode,setToCode]=useState('n/A')
// const [fromTime,setFromTime]=useState('n/A')
// const [fromDate,setFromDate]=useState('n/A')
// const [fromCity,setFromCity]=useState('n/A')
// const [toTime,setToTime]=useState('n/A')
// const [toDate,setToDate]=useState('n/A')
// const [toCity,setToCity]=useState('n/A')
// const [isDirect,setIsDirect]=useState(true)
// const [num,setNum]=useState(0)







    const date=props.date.substr(0, 10);
    console.log('havsbcubeiubciuebcwie',date)
    // const options = {
    //     method: 'GET',
    //     url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-IN/${props.origin}/${props.destination}/${date}`,
    //     params: { inboundpartialdate: ' ' },
    //     headers: {
    //         'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
    //         'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    //     }
    // };
    
        const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/IN/INR/en-IN/${props.origin}/${props.destination}/${date}`,
        params: { inboundpartialdate: ' ' },
        headers: {
            'x-rapidapi-key': 'a3607f0573mshe1c67d353f94a73p111dcbjsn3eec22f4b0bc',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
    };
        
        
    
     useEffect(
//        ()=>{
//        let isSubscribed=true;
// isSubscribed&&(async function fetch(){const commonProps={date:date, origin:props.origin, destination:props.destination,gotIt:()=>{setNum(num+1)}}
//           const result= await ApiCall(commonProps)
//           if(result.Quotes!==undefined){
//             setDataInputs(result)
//           setPrice(result.Quotes[0].MinPrice)
//           setFlightName(result.Carriers[0].Name)
//           setFromCode(result.Places[0].SkyscannerCode)
//           setToCode(result.Places[1].SkyscannerCode)
//           let t=result.Quotes[0].OutboundLeg.DepartureDate.substr(11)
//           setFromTime(t)
//           let d=result.Quotes[0].OutboundLeg.DepartureDate.substr(0,10)

//           setFromDate(d)
//           setFromCity(result.Places[0].CityName)
//           setToTime(fromTime)
//           setToDate(fromDate)
//           setToCity(result.Places[1].CityName)
//           setIsDirect(result.Quotes[0].direct)
//           }
//           else{

//           }
//           return () => (isSubscribed = false)
        
//         })();




//      }
       async () => {
    const result = await axios.request(options).then( function (response) {
        console.log(response.data);
         setDataInputs(response.data);
        // console.log("datainputs",dataInputs.Quotes[0].MinPrice);
        // setPrice(dataInputs.Quotes[0].MinPrice);
        
        // setFlightName(dataInputs.Carriers[0].Name)
        // setFromCode(dataInputs.Places[0].SkyscannerCode)
        // setToCode(dataInputs.Places[1].SkyscannerCode)
        // let t=dataInputs.Quotes[0].QuoteDateTime.substr(11);
        // setFromTime(t)
        // let d=dataInputs.Quotes[0].QuoteDateTime.substr(0,10);

        // setFromDate(d)
        // setFromCity(dataInputs.Places[0].CityName)
        // setToTime(fromTime)
        // setToDate(fromDate)
        // setToCity(dataInputs.Places[1].CityName)
        // setIsDirect(dataInputs.Quotes[0].direct)
        
        }).catch(function (error) {
            console.error(error);
        });}
      
        
        ,[]);

   


return (<>

    <br/>
    
      

    {dataInputs.Quotes?(dataInputs.Quotes.map((obj,index)=>{
      const flightName=dataInputs.Carriers[0].Name
      const fromDate=dataInputs.Quotes[index].OutboundLeg.DepartureDate.substr(0,10)
      const fromCode=dataInputs.Places[0].SkyscannerCode
      const fromCity=dataInputs.Places[0].CityName
      const fromTime=dataInputs.Quotes[0].QuoteDateTime.substr(11)
      const isDirect=dataInputs.Quotes[index].direct
      const toCode=dataInputs.Places[1].SkyscannerCode
      const toCity=dataInputs.Places[1].CityName
      const toTime=fromTime
      const currency=dataInputs.Currencies[0].Symbol
      const price=dataInputs.Quotes[index].MinPrice
      return(
        <>
        <div className="card" style={{color:'rgba(255,255,255,1) !important' }}>
        <div className="card-body text-monospace text-nowrap text-truncate text-break d-flex float-left d-xl-flex flex-row flex-grow-1 flex-shrink-1 flex-fill align-content-start align-self-start flex-wrap-reverse m-auto flex-sm-fill flex-md-fill flex-lg-fill flex-xl-fill justify-content-xl-start align-items-xl-center" style={{height: '180px', margin: '5px', width: '1227.6px', background: 'rgba(0,123,255,1)', borderRadius: '13px', boxShadow: '0px 0px 18px 4px rgba(33,37,41,0.56)'}}>
          <div className="text-break text-justify d-flex d-xl-flex flex-column flex-wrap m-auto justify-content-xl-start align-items-xl-center">
            <h3 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{flightName}</h3>
            <h6 className="text-break text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{fromDate}<br /><br /></h6>
          </div>
          <div className="text-break text-justify d-flex d-xl-flex flex-column align-self-start flex-wrap m-auto justify-content-xl-start align-items-xl-center">
            <h6 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{color: 'rgba(255,255,255,0.51)', fontSize: '11px', height: '0.8px'}}>FROM</h6>
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{fromCode}</h5>
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{fontSize: '18px', color: 'rgba(255,255,255,0.77)', height: '0px'}}><br />{fromCity}<br /><br /></h5>
            <h2 className="text-break text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{fromTime}</h2>
          </div>
          <div className="text-break text-justify d-flex d-xl-flex flex-column align-self-start flex-wrap m-auto justify-content-xl-start align-items-xl-center">
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{fontSize: '15px', color: 'rgba(255,255,255,0.47)'}}>Type</h5>
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{fontSize: '17px', color: 'rgba(255,255,255,0.77)', height: '30px'}}>{!isDirect?"Direct":"No-Direct"}<br /><br /></h5>
          </div>
          <div className="text-break text-justify d-flex d-xl-flex flex-column align-self-start flex-wrap m-auto justify-content-xl-start align-items-xl-center">
            <h6 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{color: 'rgba(255,255,255,0.51)', fontSize: '11px', height: '0.8px'}}>TO</h6>
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{toCode}</h5>
            <h5 className="text-break text-capitalize text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{fontSize: '18px', color: 'rgba(255,255,255,0.77)', height: '0px'}}>{toCity}</h5>
            <h2 className="text-break text-justify d-xl-flex justify-content-xl-start align-items-xl-center">{toTime}</h2>
          </div>
          <div className="text-break text-justify d-flex d-xl-flex flex-column align-self-start flex-wrap m-auto justify-content-xl-start align-items-xl-center">
            <h2 className="text-break text-justify d-xl-flex justify-content-xl-start align-items-xl-center" style={{borderRadius: '6px', background: '#02d617', color: 'rgb(255,255,255)',padding:'2vh'}}> {`${currency}  ${price}`}</h2>
          </div>
        </div>
        
      </div>
      <br/>
        </>
      )


    })):<span className="d-xl-flex flex-row flex-wrap justify-content-xl-center pulse animated infinite" style={{fontSize: '44px'}}>✋ No Result to display!<br /><br /></span>}
      

    


</>

);
}

export default Result;
