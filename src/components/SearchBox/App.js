import React, { useState, useEffect, useRef } from "react";

import "./app.css";
import cities from "../cities";

import { Typeahead } from 'react-bootstrap-typeahead';

const styles = {
  height: "5vh",
  padding: "1vh",
  width: "20vw",
  margin: "2vw",
  display: "flex",
  flexDirection: "row"
};

const App = (props) => {
  
  const [options, setOptions] = useState({ cities });
  const [search, setSearch] = useState("");
  

  const updateSearch = (value) => {
    setSearch(value);
    
  };
  if (props.id == 1) {
    props.setOrigin(()=>{
const city=cities.filter(object=>object.city==search);
console.log(`${city[0]?city[0].iata_code:false} cityname`);
return `${city[0]?city[0].iata_code:false}-SKY`

});
  } else {
    props.setDest(()=>{
const city=cities.filter(object=>object.city==search);
return `${city[0]?city[0].iata_code:false}-SKY`

});
  }
  const cityNames=(cities.reduce((acc,e)=>{acc.push(e.city);return acc},[]))

  return (
    


        <Typeahead
          id="auto"
          labelKey="from"
          onChange={setSearch}
          options={cityNames}
          placeholder="departing place..."
          selected={search}
        />
     

  );
};

export default App;
