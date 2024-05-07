import React from 'react'
import logo from "../assets/images/RA_logo-vector.png"
import profile from "../assets/images/pfp.png"
const Topbar = () => {
  return (
    <div>
        <div className="align-content-center flex justify-content-between px-2 bg-white border-bottom-1 border-blue-200">
         <div>    <img src={logo} style={{width:"120px"}}/></div>   
         <div className='align-content-center align-items-center flex gap-2 justify-content-between'> <img
          style={{ borderRadius: "50%" }}
          width={40}
          height={40}
          src={profile}
        />
        <div className="flex flex-column">
            <span >Admin</span>   
          <span >adeel</span>
        </div>
        <i className="pi pi-chevron-down" ></i>
       
        </div>  
            </div>
            </div>
  )
}

export default Topbar