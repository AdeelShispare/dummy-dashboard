import React, { useEffect, useState } from 'react'
import Dashboardcard from './shared/Dashboardcard';
import Datagrid from './shared/Datagrid';
import Topheader from './shared/Topheader';
import "./shared/style.scss"; 
import axios from 'axios';
import Topbar from './shared/Topbar';
const Main = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: 'title', header: 'Name',style: { width: '50%' } },
    { field: 'total', header: 'Orders Picked' },
    { field: 'price', header: 'Units Picked' }
];

useEffect(() => {
  axios.get('https://dummyjson.com/carts/1')
      .then(response => {
        console.log(response)
          setProducts(response.data.products);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}, []);
const slice=products.slice(0,2)
  return (
    <>
    <Topbar/>
    <div className='px-6 App' >
    
    <Topheader/>
    <div className='grid'>
     <div className='col-6'> <Dashboardcard title={"Units"}/></div>
     <div className='col-6'>    <Dashboardcard title={"Orders"}/></div>
    </div>
    <div className='grid'>
     <div className='col-6'> <Datagrid columns={columns} value={slice} title={"Pickers"}/></div>
     <div className='col-6'>    <Datagrid columns={columns} value={slice}  title={"Packers"}/></div>
    </div>
   </div>
   </>
  )
}

export default Main