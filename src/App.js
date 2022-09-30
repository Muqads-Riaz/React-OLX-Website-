
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img1 from './img/logo1.png'
import img2 from './img/logo2.png'
import img3 from './img/property.png'
import img4 from './img/car.png'
import footer from './img/footer.webp'
import footer1 from './img/footer1.svg'
import footer2 from './img/footer2.svg'
import footer3 from './img/footer3.svg'
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'
import ResponsiveGrid from "./components/Grid";
import './App.css';
import React, { useState } from "react";
import Data from './components/Data'


function App() {
  const[filter,setfilter] = useState("")
const search = (event)=>{
 setfilter(event.target.value)
 console.log(filter)
}
// const searchData = Data.cardData.filter((item)=>{
//    return Object.keys(item).some(key => 
//   item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
// })
   
  return (
    <div className="bg-light">
      <div>
    <img src={img1} className="blue-logo"></img>
    <span className="car-parent">
      <img src={img4} className="car"></img>
    <span>Motors</span>
    </span>
    <span className="property-parent">
    <img src={img3} className="property"></img>
    <span>Property</span>
    </span>
    </div>
    <div>
    <img src={img2} className="black-logo"></img>
    <input className = "search-form" onChange={search} value= {filter} placeholder="Find Cars, Mobile Phones and more..."
    /  >
    </div>

  <ResponsiveGrid/>

 
    <div className="text-center m-3">
   <button className="btn btn-secondary">Load More</button>
   </div>
   <div className='container mt-2'>
    <div className='row'>
        <div className='col-md-4'>
            <img src={footer} className='footer' />
        </div>
        <div className='col-md-4 p-3'>
            <h2>TRY THE OLX APP</h2>
            <p className=''>Buy, sell and find just about anything using the app on your mobile.</p>
        </div>
        <div className='col-md-4'>
            <h6>GET YOUR APP TODAY</h6>

            <div>
                <span><img src={footer1} className='footer5' /></span>
                <span><img src={footer2} className='footer4' /></span>
                <span><img src={footer3} className='footer6' /></span>
            </div>

        </div>
    </div>
</div>
<footer>
    <div className='container bg-light pt-3'>
        <div className='row'>
            <div className='col-md-2'>
                <h6>POPULAR CATEGORIES</h6>
                <p className='text-secondary'>Cars</p>
                <p className='text-secondary'>Flats for rent</p>
                <p className='text-secondary'>Mobile Phones</p>
                <p className='text-secondary'>Jobs</p>
            </div>
            <div className='col-md-2'>
                <h6>TRENDING SEARCHES</h6>
                <p className='text-secondary'>Bikes</p>
                <p className='text-secondary'>Books</p>
                <p className='text-secondary'>Watches</p>
                <p className='text-secondary'>Dogs</p>
            </div>
            <div className='col-md-2'>
                <h6>ABOUT US</h6>
                <p className='text-secondary'>About EMPG</p>
                <p className='text-secondary'>OLX Blog</p>
                <p className='text-secondary'>Contact Us</p>
                <p className='text-secondary'>OLX for Bussiness</p>
            </div>
            <div className='col-md-2'>
                <h6>OLX</h6>
                <p className='text-secondary'>Help</p>
                <p className='text-secondary'>Sitemap</p>
                <p className='text-secondary'>Terms of use</p>
                <p className='text-secondary'>Privacy Policy</p>
            </div>
            <div className='col-md-4'>
                <h6>FOLLOW US</h6>
                <div>
                    <span><img src={facebook} className='facebook' /></span>
                    <span><img src={twitter} className='twitter' /></span>
                    <span><img src={youtube} className='youtube' /></span>
                    <span><img src={instagram} className='instagram' /></span>
                </div>
                <div>
                    <span><img src={footer1} className='footer1' /></span>
                    <span><img src={footer2} className='footer2' /></span>
                    <span><img src={footer3} className='footer3' /></span>
                </div>

            </div>
        </div>
    </div>
</footer>

    </div>
  );
}

export default App;
