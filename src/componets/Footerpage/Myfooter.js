import React from 'react';
import {
    FacebookOutlined,TwitterOutlined,LinkedinOutlined,
    InstagramOutlined,YoutubeOutlined 
} from '@ant-design/icons';
import footerlogo from "../../images/Avyaja_logo.png";
import './Myfooter.css';
import { Col, Row } from 'antd';

const Myfooter = () => {
    return (
        <div className='footer_section'>
            <Row>
                <Col xl = {{span: 21, offset:2}}>
                    <div className='top_footer'>
                        <div className='footerLogo'>
                          <img src={footerlogo} alt="ImageLOgo" />
                        </div>
                        <div className='footer_text_style'>
                        <div>Avyaja is working towards the inclusion of impaired lives in mainstream society through this social integration initiative.</div>
                        <div className='date_time'>Mon - Sun, 9:00 AM – 5:00 PM</div>
                        <div className='location_text'>#60, Shiva Sai Nagar, Beeramguda, Ameenpur, Dist- Sangareddy, Telangana, PIN 502032</div>
                        <div className='contact_avyeja'>contact@avyaja.org</div>
                        </div>
                
                        <div className='socail_icons'>
                            <ul>
                                <li><a href="/"><FacebookOutlined /></a></li>
                                <li><a href="/"><TwitterOutlined /></a></li>
                                <li><a href="/"><InstagramOutlined /></a></li>
                                <li><a href="/"><LinkedinOutlined /></a></li>
                                <li><a href="/"><YoutubeOutlined /></a></li>
                            </ul>
                        </div>                  

                     </div>
                </Col>
                </Row>
                <hr />
                <Row justify="center" style={{alignItems:"center"}}>
                <Col xs={{ span: 18, offset: 1}} lg={{ span:  6, offset: 2 }}>
                    <p>© Copyright 2021 <b style={{color:"orange" ,textAlign:"justify"}}>Avyaja Foundation </b> All rights reserved.Powered by Vizib Technologies LLP</p>
                </Col>
                <Col xs={{ span: 24, offset: 0}} lg={{ span: 8, offset: 8 }}>
                   <a  className='privace_condition' href="/">Privacy Policy and Terms & Conditions</a>
                </Col>
            </Row>
        </div>
    )
} 

export default Myfooter;