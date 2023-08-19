import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaComputer } from 'react-icons/fa6';
import { GiRabbit } from 'react-icons/gi';
import { PiAirplaneTilt } from 'react-icons/pi';
import { CgNotes } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';

let App=()=> {
  return (

<div >
<section className='background' >
<div  className=' bgColor'>

<nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid pt-3">
    <a class="navbar-brand  ms-5 ps-5 text-light" href="#" style={{fontWeight:'bolder'}}>DORSIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-5 ">
        <li class="nav-item">
          <a class="nav-link text-light "  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-5 text-light " href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-5 text-light" href='#' >Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-5 text-light" href='#' >Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-5 text-light" href='#' >Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-5 text-light" href='#' >Blog</a>
        </li>
      
      </ul>
      <div className='pe-5 me-5'>
        <button class="me-5  rounded-pill ps-3 pe-3 pt-2 pb-2 buttColor" type="submit">Try it Free</button>
        </div>
      </div>
  </div>
</nav>
<div className='text-light text-center homeDiv'>
<h1 className='homeh1'>We help startups launch their <br/>products</h1>
<p className='pt-3'>Etiam sed.Interdum consequat proin vestibulum class at.</p> 
<div className='circlePlay'>
<a href="#" style={{color:' #fb3e3e',fontSize:'70px'}}><FaRegCirclePlay/></a>
</div>
</div>
</div>
</section>

{/*///////////////////////////Services///////////////////////////////////////////////  */}


<div className='services'>
<div>
<h3 className='text-center pt-5 servicesBor '>OUR SERVICES</h3>
<p className='text-center pt-5' style={{color: '#6c757d'}}>We craft digital, graphic and dimensional thinking, to create category leading brand
   experiences that <br/> have meaning and add a value for our clients.</p>
</div>


<div className='main'>
<div style={{width:"26%"}}>
<div class="card myCard" style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><IoDiamondOutline/></a>
    <h5 class="card-title pt-2">Digital Design</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>Some quick example text to build on the 
    card title and make up the bulk of the card's content.Moltin gives you the platform.</p>
  </div>
</div>
</div>
<div style={{width:"26%"}}>
<div class="card myCard" style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><FaComputer/></a>
    <h5 class="card-title pt-2">Unlimited Colors</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>Credibly brand standards compliant users without extensible services. Anibh euismod 
    tincidunt ut laoreet.</p>
  </div>
</div>
</div><div style={{width:"26%"}}>
<div class="card myCard" style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><GiRabbit/></a>
    <h5 class="card-title pt-2">Strategy Solutions</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
  </div>
</div>
</div><div style={{width:"26%"}}>
<div class="card myCard"  style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><FaReact/></a>
    <h5 class="card-title pt-2">Awesome Support</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
  </div>
</div>
</div><div style={{width:"26%"}}>
<div class="card myCard" style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><CgNotes/></a>
    <h5 class="card-title pt-2">Truly Multipurpose</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>Even the all-powerful Pointing has no control about the blind texts it
     is an almost unorthographic.</p>
     </div>
</div>
</div><div style={{width:"26%"}}>
<div class="card myCard" style={{width: "18rem;",border:"none"}}>
  <div class="card-body text-center">
  <a className='cardIcon fs-3' href="#"><PiAirplaneTilt/></a>
    <h5 class="card-title pt-2">Easy to customize</h5>
    <p class="card-text pt-2" style={{color: '#6c757d'}}>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
  </div>
</div>
</div>
</div>
</div>

{/* ////////////////////////////3rd Page  ////////////////////////////////////////*/}
<div className=' mt-5 pt-3 d-flex' style={{paddingLeft:"100px"}} >
 <div className='pg3' style={{width:"50%"}}>
 <h3 >A digital web design studio creating <br/> modern & engaging online <br/> experiences</h3>
 <p className='pt-4' style={{color: '#6c757d'}}> Separated they live in Bookmarksgrove right at the coast <br/> of the Semantics, a large language ocean. A small 
 river named Duden <br/> flows by their place and supplies it with the necessary regelialia.</p>
  <div className='mt-3'>
    <ul className='pg3Ul' style={{color: '#6c757d'}}>
      <li className='pt-3'>We put a lot of effort in desig</li>
      <li className='pt-3'>The most important ingredient of successful website.</li>
      <li className='pt-3'>Sed ut perspiciatis unde omnis iste natus error sit.</li>
      <li className='pt-3'>Submit Your Organization.</li>
    </ul>
    <button className='btn btn-danger mt-3 p-2'>Learn More</button>
  </div>
 </div>
  
 <div className='pg3img' style={{width:"50%"}}>
  <img src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg" style={{width:"500px"}} alt="" />
 </div> 
</div>

{/* -------------------------------page 4 --------------------------------------------------------------*/}

<div className='background2 mt-5'>
  <div className='bgColor2'>
    <div className='text-center  pg3Main ' >
<h1 className='pt-4 text-light'>Build your dream website today</h1>
<p className= "pg3pera pt-3" >But nothing the copy said could convince her and so it didn’t take long until a few insidious 
   <br/> Copy Writers ambushed her.</p>
<button className='btn btn-danger p-2 '>View Plan & Pricing </button>
</div>
</div>
</div>


{/* -----------------------page 5 ---------------------------------------------------------------------*/}
<div>
<div>
<h3 className='text-center pt-5 servicesBor '>OUR PRICING</h3>
<p className='text-center pt-5' style={{color: '#6c757d'}}>Call to action pricing table is really crucial to your for your business website. 
Make your bids stand-out<br/> with amazing options.</p>
</div>

<div className='d-flex justify-content-center '>

<div className='' style={{width:"25%"}} >
<div class="card" style={{width: "20rem;",height:"72vh",outline:"none"}}>
  <div class="card-header text-center">
    <p>ECONOMY</p>
    <h1>$9.90</h1>
    <p>BILLING PER MONTH</p>
  </div>
  <ul  class="list-group list-group-flush text-center">
    <li  style={{border:"none",outline:"none"}} class="list-group-item">Bandwidth: 1GB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Onlinespace: 50MB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Support: No</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>1 Domain</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>No Hidden Fees</li>
  </ul>
  <div className='d-flex justify-content-center pt-5' >

  <button className='btn btn-danger'>Join Now</button>
  </div>
</div>
</div>
<div className='ms-4' style={{width:"25%"}} >
<div class="card" style={{width: "20rem;",height:"72vh",outline:"none"}}>
  <div class="card-header text-center">
    <p>DELUXE</p>
    <h1>$19.90</h1>
    <p>BILLING PER MONTH</p>
  </div>
  <ul  class="list-group list-group-flush text-center">
    <li  style={{border:"none",outline:"none"}} class="list-group-item">Bandwidth: 1GB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Onlinespace: 50MB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Support: No</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>1 Domain</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>No Hidden Fees</li>
  </ul>
  <div className='d-flex justify-content-center pt-5' >

  <button className='btn btn-danger'>Join Now</button>
  </div>
</div>
</div>
<div className='ms-4' style={{width:"25%"}} >
<div class="card" style={{width: "20rem;",height:"72vh",outline:"none"}}>
  <div class="card-header text-center">
    <p>ULTIMATE</p>
    <h1>$29.90</h1>
    <p>BILLING PER MONTH</p>
  </div>
  <ul  class="list-group list-group-flush text-center">
    <li  style={{border:"none",outline:"none"}} class="list-group-item">Bandwidth: 1GB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Onlinespace: 50MB</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>Support: No</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>1 Domain</li>
    <li class="list-group-item" style={{border:"none",outline:"none"}}>No Hidden Fees</li>
  </ul>
  <div className='d-flex justify-content-center pt-5' >

  <button className='btn btn-danger'>Join Now</button>
  </div>
</div>
</div>


</div>
</div>






</div>
);
}

export default App;
