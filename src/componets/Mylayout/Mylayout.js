import './Mylayout.css';
import { WhatsAppOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import AvyejaLogo from "../../images/Avyaja_logo.png";

const Mylayout = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);


  };
  return (
    <div className='myheader' id='navbar'>
      <nav className='myheader_navigation' >
        <div></div>
        <div className='myheader_logo'><a href="/">
          <img src={AvyejaLogo} alt="MyLOGo" />
        </a></div>
        <div className="spacer" />
        <div className='myheader_drawar_style'>        
        <div className='myheader_navigation_items'>
          <ul>
            <li>
              <a href="/">
                <span style={{ color: "green" }}> <WhatsAppOutlined /></span>
                <span> +91 900 900 3963</span>
              </a></li>
            <li>( Service Hours: 8am - 8pm IST )</li>
          </ul>
        </div>
        <div>
          <Button className='drawar_button' onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer title="Menu" width={300} placement="right" onClose={onClose} open={open}>
            <ul className='drawar_items'>
              <li><a class="cool-link" href="#section1">HOME</a></li>
              <li><a class="cool-link" href="#about">ABOUT</a></li>
              <li><a class="cool-link" href="#blogs">BLOGS</a></li>
              <li><a class="cool-link" href="/">JOIN AVYEJA</a></li>
            
            </ul>
          </Drawer>          
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Mylayout