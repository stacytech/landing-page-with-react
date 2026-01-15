import React from 'react'

export const Landing = () => {
  return (
    <div>
      <div className='Container'>

       <nav id='navbar' style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px"}}>

        <div id='logo'>
          <p>SkyLine Residences</p>
        </div>

        

        <ul style={{ listStyle: "none", display: "flex", gap: "24px", margin: "0", padding: "0"}}>
          <li><a href="#home" style={{ textDecorationLine: "none" }}>Home</a></li>
          <li><a href="#properties" style={{ textDecorationLine: "none" }}>Properties</a></li>
          <li><a href="#About" style={{ textDecorationLine: "none" }}>About</a></li>
          <li><a href="#contact" style={{ textDecorationLine: "none" }}>Contact</a></li>
        </ul>
      
    
      
   
       </nav>
      </div>
    </div>
  )
}
