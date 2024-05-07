import React from 'react'
import "./style.scss"; 
const Dashboardcard = (props) => {
  return (
    <div className='pt-2'>
         <div className="bg-white pl-2 pb-3 border-card">
        <div className='flex justify-content-between flex-column pl-2'>
        <h3 className="mb-3 pb-3">{props.title?props.title:"-"}</h3>
        <div className='flex gap-5'>
        <div className='flex justify-content-between flex-column gap-2'>
            <div className='p-1 pl-3 pr-3 flex bg-pick justify-content-between align-items-center gap-8 w-17rem'>  <span className='pl-2 font-semibold' >Picked</span>  
            <span className='rounded-pill bg-light '>0</span>
            </div>
            <div className='p-2 pl-3 pr-3 flex bg-pick justify-content-between align-items-center gap-8 w-17rem'>  <span className='pl-2 font-semibold' >Packed</span>  
            <span className='rounded-pill bg-medium '>0</span>
            </div>
            <div className='p-2 pl-3 pr-3 flex bg-pick justify-content-between align-items-center gap-8 w-17rem'>  <span className='pl-2 font-semibold' >Shipped</span>  
            <span className='rounded-pill bg-dark '>0</span>
            </div>
           
        </div>
        <div className='flex justify-content-center flex-column align-items-center gap-2'>
        <div className='p-2 flex bg-pick-second justify-content-between align-items-center gap-4 w-17rem'>  <span className='pl-2 font-semibold' >{props.title?props.title:"-"} Shipped Yesterday</span>  
            <span className='rounded-pill bg-dark-second font-bold p-2'>0</span>
            </div>
            <div className='p-2 flex bg-pick-second justify-content-between align-items-center gap-4 w-17rem '>  <span className='pl-2 font-semibold' >{props.title?props.title:"-"} in Queue</span>  
            <span className='rounded-pill bg-dark-second font-bold p-2'>63453</span>
            </div>
         
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardcard