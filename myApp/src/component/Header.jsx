import React from 'react';
import hero from '../assets/hero.png'

export const Header = () => {
  return (
    <div>
      <nav id='home' style={{display: 'flex', height:"80px", top: "0", zIndex: "999", position:"fixed", width: "100%", paddingTop:"80px", justifyContent: 'space-between',alignItems: 'center',padding: '16px 32px', backgroundColor: '#fff',boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <div id='logo'>
          <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>SkyLine Residences</p>
        </div>
        <ul style={{ listStyle: 'none',display: 'flex',gap: '24px',margin: 0,padding: 0,zIndex: 2
        }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
           <li><a href="#services" style={{ textDecoration: 'none', color: '#333' }}> Our Services</a></li>
          <li><a href="#properties" style={{ textDecoration: 'none', color: '#333' }}>Properties</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
          <li><a href="#services" style={{ textDecoration: 'none', color: '#333' }}>Services</a></li>
        </ul>
      </nav>

     
      <header style={{position: 'relative',width: '100%',height: '90vh',overflow: 'hidden'}}>
        
        <img src={hero} alt="Hero Image" style={{ position: "relative",  left:"-10rem", height: "50", bottom: "26rem", paddingTop: "80px", marginTop: " 80px" }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',color: 'white', textAlign: 'center', zIndex: 1
        }}>
            <h1 style={{marginTop: "5rem"}}>Real Estate Made Simple — For Buyers Looking to Move and Sellers Ready to List</h1>
      <p className="sub" style={{marginTop: "1rem"}}>Buy Smart, Sell Easy — Real Estate You Can Rely On</p>

     <a href="#button" className='btn' style={{ textDecoration: "none", marginTop:"3rem", display: "inline-block", padding: "10px 12px", borderRadius: "8rem", fontFamily: "initial", fontWeight: "bold", }}>Contact Us</a>
      
    </div>
     
      
      </header>

      <main>
        <h1 id='services' style={{textAlign: "center", marginTop: "80px"}}>Our Services</h1>

        <div className='box' style={{ padding: "2rem", margin: "2rem", border: "1px solid #ccc", borderRadius: "8px"}}>

         <h4 className='h4' >🏡 Residential Property Sales</h4> <br /> 
         <p className='ptag' style={{fontFamily: "ui-serif", fontSize: "15px"}}> &nbsp; Helping You Find Your Dream <br /> &nbsp; Home with expert Support Every <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Step Of The Way.</p> 
         
</div>
      
      </main>

      
    </div>
  );
};

