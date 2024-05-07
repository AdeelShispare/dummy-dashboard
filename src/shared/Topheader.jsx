import React, { useState } from 'react';
import { Badge } from 'primereact/badge';
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import "./style.scss"; 

const Topheader = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
        });
      }
    }
  };

  return (
    <div className='topbar pt-1 pl-1'>
      <div className='flex justify-content-between align-items-center gap-3'>
        <div className="flex flex-column align-items-start text-left">
          <span className='text-xs font-normal'>Home</span>
          <span className='font-bold'> Dashboard</span>
        </div>
        <div className="flex align-items-start gap-2">
          <div>
            <Badge value="" className="status-badge"></Badge>
            <span className='font-normal'> To Do</span>
          </div>
          |
          <div>
            <Badge value="" className="status-badge1"></Badge>
            <span className='font-normal'> In Progress</span>
          </div>
          |
          <div>
            <Badge value="" className="status-badge2"></Badge>
            <span className='font-normal'> Done</span>
          </div>
       
       
        </div>
      </div>
    </div>
  );
};

export default Topheader;
