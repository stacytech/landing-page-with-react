import React, { useState } from 'react';
import hero from '../assets/hero.png'
import download from '../assets/download.webp'
import image from '../assets/image.webp'
import OIP from '../assets/OIP.webp'
import Properties from './Properties'
import downloadd from '../assets/download (1).webp'
import img from '../assets/img.webp'
import OIPP from '../assets/OIP (1).webp'
import OIPPP from '../assets/OIP (2).webp'
import downloaddd from '../assets/download (2).webp'
import OIF from '../assets/OIF.webp'
import men from '../assets/men.jpg'

export const Header = () => {
const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  fontSize: '14px',
};


  return (
    
    <div>
      <nav data-aos="zoom-in" data-aos-duration="900" className='nav'  style={{display: 'flex', backgroundColor:"darkgreen", color: "#000", height:"80px", top: "0", zIndex: "999", position:"fixed", width: "100%", paddingTop:"80px", justifyContent: 'space-between',alignItems: 'center',padding: '16px 32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <div id='logo'>
          <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>🏡SkyLine Residences</p>
        </div>
        <ul className='style' style={{ listStyle: 'none',display: 'flex',gap: '24px',margin: 0,padding: 0,zIndex: 2, fontWeight: 'bold'
        }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
           <li><a href="#services" style={{ textDecoration: 'none', color: '#333' }}> Our Services</a></li>
          <li><a href="#properties" style={{ textDecoration: 'none', color: '#333' }}>Properties</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
        </ul>
      </nav>

     
      <header data-aos="zoom-in" data-aos-duration="900" style={{position: 'relative',width: '100%',height: '90vh',overflow: 'hidden'}}>
       
        
        <img data-aos="zoom-in" data-aos-duration="900" id='home' src={hero} alt="Hero Image" style={{ position: "relative",  left:"-10rem", height: "50", bottom: "26rem", paddingTop: "80px", marginTop: " 80px" }}
        />
        <div data-aos="zoom-in" data-aos-duration="900"  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',color: 'white', textAlign: 'center', zIndex: 1
        }}>
            <h1 data-aos="zoom-in" data-aos-duration="900" style={{marginTop: "5rem"}}>Real Estate Made Simple — For Buyers Looking to Move and Sellers Ready to List</h1>
      <p data-aos="zoom-in" data-aos-duration="900" className="sub" style={{marginTop: "1rem"}}>Buy Smart, Sell Easy — Real Estate You Can Rely On</p>
<div data-aos="zoom-in" data-aos-duration="900">
     <a href="contact" className='btn'  style={{ textDecoration: "none", marginTop:"3rem", display: "inline-block", padding: "10px 12px", borderRadius: "8rem", fontFamily: "initial", fontWeight: "bold", }} >Contact Us</a>
      </div>
    </div>
     
      
      </header>

      <main>
        <div data-aos="fade-down"></div>
        <h1 data-aos="fade-up" data-aos-delay="240" id='services' style={{textAlign: "center", marginTop: "80px"}}>Our Services</h1>

        <div data-aos="fade-up" data-aos-delay="240" className='box-container' style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr", gap: "1px", padding: "5px"}}>

        <div className='box' style={{ padding: "2rem", margin: "2rem", border: "1px solid #ccc", borderRadius: "8px"}}>

         <h4 className='h4' >🏡 Residential Property Sales</h4> <br /> 
         <p className='ptag' style={{fontFamily: "ui-serif", fontSize: "15px"}}> &nbsp; Helping You Find Your  <br /> &nbsp; Dream Home with expert  <br /> &nbsp; Support Every Step Of <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Way.</p> 
         
</div>
      

        <div className='box2' style={{ padding: "2rem", margin: "2rem", border: "1px solid #ccc", borderRadius: "8px"}}>

         <h4 className='h4' > 🔑 Lease Management</h4> <br /> 
         <p className='ptag' style={{fontFamily: "ui-serif", fontSize: "15px"}}> &nbsp; Maximizing Occupancy  <br /> &nbsp; While Managing Leases  <br /> &nbsp; Efficiently & Professionally <br /> &nbsp; On Your Behalf.</p> 
         
</div>

        <div className='box3' style={{ padding: "2rem", margin: "2rem", border: "1px solid #ccc", borderRadius: "8px"}}>

         <h4 className='h4' > 🏨 Commercial & Development</h4> <br /> 
         <p className='ptag' style={{fontFamily: "ui-serif", fontSize: "15px"}}> &nbsp; Commercial Properties And <br /> &nbsp;  Land In the Right Locations <br /> &nbsp; For Smart.</p> 
         
</div>


        <div className='box3' style={{ padding: "2rem", margin: "2rem", border: "1px solid #ccc", borderRadius: "8px"}}>

         <h4 className='h5' > 📉 Property Advisory</h4> <br /> 
         <p className='ptag' style={{fontFamily: "ui-serif", fontSize: "15px"}}> &nbsp; Expert Guidance To Help <br /> &nbsp; You make Informed Property  <br /> &nbsp; Decisions With Confidence.</p> 
         
</div>
</div>

<div data-aos="fade-up" data-aos-delay="80" id='properties' style={{marginTop: "6rem", textAlign: "center"}}>
  <h1>Property Spotlight</h1>

  <p style={{marginTop: "1rem"}}>Discover A Standout Property Handpicked For It's Premium Qualitiy And Appeal </p> 

 <div className='image-container'  style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr", gap:"90px", padding: "5px"}} >
 
  <div className='images' data-aos="zoom-in" data-aos-duration="900">
   <a href="villa"><img src={download} alt="" style={{borderRadius: "1rem", padding: "1rem" }} /></a>
   <h3>Downtown Luxury Villa</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Metropolitan, City Center</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 5Beds &#128167; 3Baths &#129704; 2,6000 sq ft &#127946; 1Pool</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$800,000 <a className='btnn' href="villa" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
   </div>

   <div className='images2' data-aos="zoom-in" data-aos-duration="900">
   <a href="villa2"><img src={image} alt="" style={{borderRadius: "1rem", padding: "2rem"  }} /></a>
   <h3>Downtown Luxury Duplex</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Northstar City District</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 6Beds &#128167; 4Baths &#129704; 5000 sq ft &#127946; 1Pool</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$2,000,000 <a className='btnn' href="downtown" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
   </div>

<div className='images3' data-aos="zoom-in" data-aos-duration="900" >
   <a href="duplex"><img src={OIP} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Mordern Family Home</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Maple Heights, Downtown</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 3Beds &#128167;2 Baths &#129704; 2400 sq ft</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$750,000 <a className='btnn' href="family" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>

<div className='images4' data-aos="zoom-in" data-aos-duration="900">
   <a href="duplex"><img src={downloadd} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Mordern Duplex</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Downtown Vanguard City</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 3Beds &#128167; 2Baths &#129704; 3000 sq ft </p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$900,000 <a className='btnn' href="md" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
<div className='images5' data-aos="zoom-in" data-aos-duration="900" >
   <a href="duplex"><img src={img} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Charming Town House</h3>
    <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; RiverSide District</p>
    <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 2Beds &#128167; 1Bath &#129704; 1700 sq ft</p><br />
     <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$2,700/month <a className='btnn' href="charming" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
<div className='images6' data-aos="zoom-in" data-aos-duration="1900">
   <a href="duplex"><img src={OIPP} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Luxury Contempoary Mansion</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Aurelia city</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 10Beds &#128167; 10Baths &#129704; 5400 sq ft &#127946; 3Pool</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$3,450,000 <a className='btnn' href="mansion" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
<div className='images7' data-aos="zoom-in" data-aos-duration="1900" >
   <a href="duplex"><img src={OIPPP} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Luxury Estate</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Prestigieous hills</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 5Beds &#128167; 4Baths &#129704; 4600 sq ft</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$1,250,000 <a className='btnn' href="estate" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
<div className='images8' data-aos="zoom-in" data-aos-duration="1900" >
   <a href="duplex"><img src={downloaddd} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Starter Family Home</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Greenwood Surbs</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 3Beds &#128167; 2Baths &#129704; 1400 sq ft</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$320,000 <a className='btnn' href="starter" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
<div data-aos="zoom-in" data-aos-duration="1900" className='images9' >
   <a href="duplex"><img src={OIF} alt="" style={{borderRadius: "1rem", padding: "2rem"}} /></a>
   <h3>Classic Penthouse</h3> 
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#128205; Downtown Pinnacle City</p>
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>&#127969; 5Beds &#128167; 3Baths &#129704; 4,500 sq ft &#127946; 2Pools</p>
   <br />
   <p style={{fontWeight: "bold", fontFamily: "ui-rounded"}}>$1,550,000 <a className='btnn' href="penthouse" style= {{padding: "5px 7px", borderRadius: "2rem", color: "black", textDecoration: "none"}}>View Details</a></p>
  </div>
</div>

</div>
  <div >
    <h2 id='about' style={{marginTop: "8rem", position: "relative", left: "4.5rem"}}>📝About SkyLine Residences</h2>
    <p style= {{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SkyLine Residences is a premium real estate brand built for modern urban living. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We specialize in developing and managing luxury downtown apartments and high-rise <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;residences designed for people who want to live at the center of the city,close <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to work, culture and lifestyle. Our vision is to redefine downtown living by <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; creating secure, stylish, and smarthomes that offer the best city life without <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sacrificing comfort or luxury <br /><br /><br />

    
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🌟SkyLine Residences focuses on 
       
        <li data-aos="zoom-in" data-aos-duration="2500" style={{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅Luxury Downtown Apartments</li>
        <li data-aos="zoom-in" data-aos-duration="2500" style={{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅High Rise Villa And Penthouse </li>
        <li data-aos="zoom-in" data-aos-duration="900" style={{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅Mordern Duplex And Mansions</li>
        <li data-aos="zoom-in" data-aos-duration="2500" style={{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅Premium property Management</li>
        <li data-aos="zoom-in" data-aos-duration="2500" style={{fontFamily: "san-serif", fontWeight:"600", fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅High-end Amenities And Smarthome Features</li><br /><br />

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💎 We deliver Properties that combines<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exceptional Design, premium amenities, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unmatched locations, modern technologies, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; top-level security and strong investments. <br /> <br /><br /> <h2 data-aos="zoom-in" data-aos-duration="2500" style={{color: "darkgreen"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20+ <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Properties sold &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Years Experience<br /> <br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50+<br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client Satisfaction &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expert Agents </h2> <br /><br /><br /> <a href="bttn" id='bttn' data-aos="zoom-in" data-aos-duration="2500" style={{marginLeft: "12rem", textDecoration:"none" }}>Meet Our Team</a>
         </p>
        
         <img  src={men} alt="" className='men' style={ {width:"35rem", marginLeft: "40rem", position: "relative", bottom: "30rem", borderRadius:"10px"}} />
 
  </div>

  <div>
   <div data-aos="zoom-in" data-aos-duration="3000" style={{backgroundColor: "darkgreen", padding: "80px 20px", display: "flex", justifyContent: "center"}}>
<div data-aos="zoom-in" data-aos-duration="3000" style={{background: "#fff", maxWidth: "900px",width: "100%", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)"}}>
  <h3 style={{marginBottom: "25px",}}>
    Find Your Property
  </h3>

  <div style={{display: "grid", gridTemplateColumns:"1fr 1fr", gap: "15px"}}>
      <input style={inputStyle} placeholder='Full Name' />
      <input style={inputStyle} placeholder='Email' />
      <input style={inputStyle} placeholder='Phone' />
      
      <select style={inputStyle}>
        <option>Budget Range</option>
        <option>$300k - $500k</option>
        <option>$500k - $900k</option>
        <option>$900k+</option>
      </select>

      <input style={inputStyle} placeholder='Preferred Location' />

      <textarea style={{inputStyle, marginTop: "15px", minHeight: "120px"}} placeholder='Additional Requirements'></textarea>

      <button id='bbtn' style={{marginTop: "20px",  color: "#fff", padding: "12px 24px", border: "none", borderRadius: "6px", cursor: "pointer"}}>Submit Inquiry</button>
  </div>

</div>
   </div>
  </div>

<div data-aos="zoom-in" data-aos-duration="2500" id='contact' style={{fontFamily: "Arial, sans-serif",background: "#f8fafc",padding: "40px"}}>
      <div style={{background: "#ffffff",borderRadius: "10px",padding: "30px",display: "grid",gridTemplateColumns: "1fr 1fr",gap: "30px",boxShadow: "0 10px 30px rgba(0,0,0,0.05)",maxWidth: "1100px", margin: "0 auto"}}>
       
        <div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <div style={{width: "36px", height: "36px",borderRadius: "50%",background: "#e0e7ff",display: "flex",alignItems: "center",justifyContent: "center",fontWeight: "bold",color: "darkgreen"}}>
              📍
            </div>
            <div novalidate data-aos="fade-left"  data-aos-duration="2500">
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                Visit Our Office
              </div>
              <div style={{color: "#555",fontSize: "14px",lineHeight: "1.5"}}>
                125 Main Street, Downtown Business District
                <br />
                Metropolitan City, State 12345
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="900" style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "36px",height: "36px",borderRadius: "50%",background: "#e0e7ff",display: "flex", alignItems: "center",  justifyContent: "center", fontWeight: "bold",color: "darkgreen" }}>
              📞
            </div>
            <div>
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                Call Us
              </div>
              <div style={{ color: "#555", fontSize: "14px",lineHeight: "1.5"}}>
                +234 (816) 115-3624
                <br />
                Mon – Fri: 9:00 AM – 6:00 PM
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2500" style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "36px",height: "36px",borderRadius: "50%",background: "#e0e7ff",display: "flex",alignItems: "center",justifyContent: "center",fontWeight: "bold",color: "darkgreen"}}>
              ✉️
            </div>
            <div>
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                Email Us
              </div>
              <div style={{ color: "#555", fontSize: "14px",lineHeight: "1.5"}}>
                successomede06@gmail.com
                <br />
                stacytech0@gmail.com
              </div>
            </div>
          </div>

         
          <div data-aos="zoom-in" data-aos-duration="2500" style={{height: "180px",borderRadius: "8px",overflow: "hidden"}}>

            <iframe title="map" src="https://maps.google.com/maps?q=city%20hall&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: "100%", height: "100%", border: "0" }}loading="lazy"/>
          </div>
        </div>

       
        <div>
          <input placeholder="Name"style={{ width: "100%",padding: "12px",marginBottom: "16px",borderRadius: "6px",border: "1px solid #ddd",fontSize: "14px"}}/>

          <input
            placeholder="Email"
            style={{width: "100%",padding: "12px", marginBottom: "16px",borderRadius: "6px",border: "1px solid #ddd",fontSize: "14px"}}/>

          <input placeholder="Phone" style={{width: "100%",padding: "12px",marginBottom: "16px",borderRadius: "6px", border: "1px solid #ddd",fontSize: "14px"}}/>

          <textarea placeholder="How can we help you?" style={{width: "100%",padding: "12px", minHeight: "120px",borderRadius: "6px",border: "1px solid #ddd",fontSize: "14px",resize: "none"}}/>

          <button id="mybtn"style={{ marginTop: "16px", width: "100%",padding: "14px", color: "#fff",border: "none",borderRadius: "8px",fontSize: "15px",cursor: "pointer"}}>
            Send Message
          </button>
        </div>
      </div>

      
      <div data-aos="zoom-in" data-aos-duration="2500" style={{ position: "fixed",bottom: "20px",right: "20px",background: "darkgreen",color: "#fff",padding: "12px 16px", borderRadius: "999px",fontSize: "14px",cursor: "pointer"}}>
        💬 Talk with Us
      </div>
       </div>

      
      </main>

      <footer data-aos="zoom-in" data-aos-duration="900" style={{background: "#0f172a",color: "#e5e7eb",padding: "60px 40px 30px",fontFamily: "Arial, sans-serif"}}>
   
      <div style={{ maxWidth: "1100px",margin: "0 auto", display: "grid",gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "30px",marginBottom: "40px"}}
      >

        <div>
          <div
            style={{fontSize: "20px",fontWeight: "bold", color: "#ffffff",marginBottom: "12px",
            }}
          >
            🏡SkyLine Residences
          </div>
          <p style={{fontSize: "14px",lineHeight: "1.6",color: "#cbd5f5", }}>
            Helping you find the perfect property with trusted expertise,
            modern solutions, and personalized service.
          </p>
        </div>

        
        <div>
          <div data-aos="zoom-in" data-aos-duration="3000" style={{fontWeight: "600",marginBottom: "12px",color: "#ffffff", }}>
            Company
          </div>
          <div data-aos="zoom-in" data-aos-duration="900" style={{ fontSize: "14px", lineHeight: "2" }}>
            <div>About Us</div>
            <div>Services</div>
            <div>Careers</div>
            <div>Contact</div>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: "600",marginBottom: "12px",color: "#ffffff", }} >
            Support
          </div>
          <div style={{ fontSize: "14px", lineHeight: "2" }}>
            <div>Help Center</div>
            <div>FAQs</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>

       
        <div>
          <div style={{fontWeight: "600",marginBottom: "12px",color: "#ffffff", }}>
            Contact
          </div>
          <div style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <div>📍 125 Main Street</div>
            <div>📞 +234 (816) 115-3624</div>
            <div>✉️ stacytech0@gmail.com</div>
          </div>
        </div>
      </div>


      <div data-aos="zoom-in" data-aos-duration="900" style={{ height: "1px",background: "rgba(255,255,255,0.1)",marginBottom: "20px" }}/>
      <div data-aos="zoom-in" data-aos-duration="900" style={{ maxWidth: "1100px", margin: "0 auto",  display: "flex",justifyContent: "space-between",alignItems: "center",fontSize: "13px",color: "#94a3b8",flexWrap: "wrap",gap: "12px",}}>
        <div>© {new Date().getFullYear()} Your Company. All rights reserved.</div>

        <div data-aos="zoom-in" data-aos-duration="900" style={{ display: "flex", gap: "14px" }}>
          <span style={{ cursor: "pointer" }}>🌐</span>
          <span style={{ cursor: "pointer" }}>🐦</span>
          <span style={{ cursor: "pointer" }}>📘</span>
          <span style={{ cursor: "pointer" }}>📸</span>
        </div>
      </div>
    </footer>

      
    </div>
  );
};

