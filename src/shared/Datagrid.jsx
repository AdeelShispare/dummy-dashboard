import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Datagrid = (props) => {
    const [products, setProducts] = useState([{
        name:"hasgha",
        orders:"orders",
        units:"units",
    },{
      name:"hasgha",
      orders:"orders",
      units:"units",
  },
  {
    name:"hasgha",
    orders:"orders",
    units:"units",
}]);
  return (
    <div> <div className='pt-1'>
    <div className="bg-white pl-2 border-card px-4">
   <div className='flex justify-content-between align-items-center '>
   <h3 className="mb-3 ">{props.title?props.title:"-"}</h3>
   <div className='p-2 flex bg-pick-second  align-items-center  w-12rem '>  <span className='pl-2 font-semibold text-sm ' >Total Orders Picked </span>
  <div className='abc'></div>
   <span>0</span> 
 </div>
   
   </div>
   <div className='data-grid'>
   <DataTable value={props.value}  cellClassName={ "text-center" } className='th-center'>
   {props.columns?.map((column, index) => (
                                <Column key={index} field={column.field} header={column.header} style={column.style}></Column>
                            ))}
  
            </DataTable>
   </div>
 </div>
</div></div>
  )
}

export default Datagrid