
import { useRef, useState } from 'react';
import './Search.css';
import { default as SearchBox } from './SearchBox/App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo.png';

export default function Banner(props){

    //styles
    const styles = {
    
    padding: "1vh",
    width: "100%",
    


}

    //States and ref
    const inputRef = useRef(null);

    const [startDate, setStartDate] = useState(new Date());
    const [originCity, setOriginCity] = useState('');
    const [destCity, setDestCity] = useState('');
   

    //setting states
        function setOrigin(value) {
        setOriginCity(value);
        
    }

    function setDest(value) {
        setDestCity(value);
        
        
    }

    //search button clicks
    const doIt = (e) => {
        window.focus()
      {  props.doIt(originCity,
        destCity,
        startDate)}
        

        

    }


return(

<>

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
    <link rel="stylesheet" href="/assets/css/Footer-Basic.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" href="/assets/css/Navigation-Clean.css"/>
    <link rel="stylesheet" href="/assets/css/styles.css"/>
    <link rel="stylesheet" href="/assets/css/Toggle-Switches.css"/>
            
                <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white navigation-clean">
                    <div className="container-fluid"><img id='rowLogo' src={logo} alt="logo"/><button className="navbar-toggler" data-toggle="collapse"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button></div>
                </nav>
                <section>
                    <div className="jumbotron jumbotron-fluid text-monospace text-break text-center text-white d-flex flex-column flex-grow-1 flex-shrink-1 justify-content-around flex-wrap" style={{ background: 'url("+ bgImg +") center / cover, var(--blue)',fontFamily: 'Roboto, sans-serif !important',fontWeight: 'bold'  }}>
                        <h1 className="text-break" style={{ textShadow: '1px 3px 9px #4b9dea', fontFamily: 'Roboto, sans-serif', color: 'rgba(255,255,255,0.86)', textAlign: 'center', fontSize: '64px', fontWeight: 'bold',marginBottom:'3vh' }}>🌏 Get. Set. Travel.</h1>
                        <div className="row">
                        {/* toggle single or round? */}
                            <div className="col d-flex flex-grow-1 flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center" style={{ margin: '18px', marginLeft: '18px' }}>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons"><label data-bss-hover-animate="pulse" className="btn btn-secondary active" >SINGLE<input type="radio" name="options" defaultChecked /></label><label data-bss-hover-animate="pulse" className="btn btn-secondary" >ROUND<input type="radio" name="options" defaultChecked /></label></div>
                            </div>
                            <div className="col d-flex flex-grow-1 flex-shrink-1 flex-wrap justify-content-xl align-items-xl-center" style={{ margin: '18px', marginLeft: '18px' }}>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons"><label data-bss-hover-animate="pulse" className="btn btn-secondary active" style={{ background: 'var(--blue)' }}>CHEAPEST DATES<input type="radio" name="options" defaultChecked /></label><label data-bss-hover-animate="pulse" className="btn btn-secondary" style={{ background: 'var(--orange)' }}>CHEAPEST QUOTES<input type="radio" name="options" defaultChecked /></label></div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-start align-items-start">
                            <div className="col d-flex flex-grow-1 flex-shrink-1 justify-content-around align-self-start flex-wrap my-auto align-items-xl-center" style={{ borderStyle: 'none' }}>
                                 {/* Origin city input */}
                                <div className="input-group flex-wrap-reverse" style={{ width: '300px' }}>
                                    <div className="input-group-prepend"><span className="input-group-text" style={{ background: 'var(--blue)', color: 'rgb(255,255,255)' }}>FROM</span></div><SearchBox id="1" value={originCity} setOrigin={setOrigin} placeholder="Enter origin city"/>
                                    <div className="input-group-append" />
                                </div>
                                 {/* destination city input */}
                                <div className="input-group" style={{ width: '300px' }}>
                                    <div className="input-group-prepend"><span className="input-group-text" style={{ color: 'rgb(255,255,255)', background: 'var(--blue)' }}>TO</span></div><SearchBox id="2" value={destCity} setDest={setDest} placeholder="Enter destination city"/>
                                    <div className="input-group-append" />
                                    {/* date picker */}
                                </div><div className="input-group" style={{ width: '300px' }}>
                                    <div className="input-group-prepend"><span className="input-group-text" style={{ color: 'rgb(255,255,255)', background: 'var(--blue)' }}>Depart On</span></div><DatePicker  dateFormat="yyyy-MM-dd"  selected={startDate} inputStyle={styles} onChange={date => setStartDate(date)} />
                                    
                                    <div className="input-group-append" /></div><a className="btn btn-primary" type="button" target="_blank" onClick={()=>( doIt()&&window.focus() )}  style={{ background: 'var(--orange)',width: '200px',borderRadius:'3vh' }}>Search</a>
                            </div>
                        </div>
                    </div>
                </section>
</>



)

}