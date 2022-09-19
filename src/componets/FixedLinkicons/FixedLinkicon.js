import React from 'react';
import "./FixedLinkicon.css";
import {
    FacebookOutlined,TwitterOutlined,LinkedinOutlined,
    InstagramOutlined,YoutubeOutlined ,WhatsAppOutlined
} from '@ant-design/icons';

const FixedLinkicon = () => {
  return (
 <div class="sidenav">
  <a href="#whatsapp"><WhatsAppOutlined /></a>
  <a href="#fecbook"><FacebookOutlined /></a>
  <a href="#twitter"><TwitterOutlined /></a>
  <a href="#linked"><LinkedinOutlined /></a>
  <a href="#instagram"><InstagramOutlined /></a>
  <a style={{border:"none"}} href="#youtube"><YoutubeOutlined /></a>
</div>
  )
}

export default FixedLinkicon