import React from 'react';
import { Col, Row } from 'antd';
import "./Contentpage.css";
import section2image from "../../images/section2image.jpg";
import playstore from "../../images/playstore.png";
import section4img6 from "../../images/section4img6.png";

const Contentpage = () => {
  return (
    <>
      <div className='contentpage_style'>
        <Row>
          <Col xs={{ span: 24, offset: 0, }} md={{ span: 12, offset: 1, }} lg={{ span: 10, offset: 2, }}>
            <p>Avyaja is a Not-for-Profit Organization assisting in the area of Mobility to enrich and dignify the impaired lives of society affected by events influenced due to age, genetic, birth, religion, social events, environmental & psychological factors. Avyaja is working towards the inclusion of impaired lives into mainstream society through this social integration initiative.</p>
          </Col>
          <Col xs={{ span: 24, offset: 0, }} md={{ span: 10, offset: 0, }} lg={{ span: 9, offset: 1, }}>
            <img src={section2image} alt="section2Image" />
          </Col>
        </Row>
      </div>
      <div className='section3' id='section3'>
        <Row>
          <Col lg={{ span: 18, offset: 0, }}>
            <div className='about-content'>
              <h1>Avyaja app is launched</h1>
              <h2 className='text-yellow'>Avyaja App - Use it to Believe it</h2>
              <p><a href="/">(Please click here to register for the webinar)</a></p>
              <div className='download-app'>
                <a href="/">
                  <img src={playstore} alt="download-app-image" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <section id='section4'>
        <div className="section4">
          <Row>
            <Col xs={{ span: 24, offset: 0, }} lg={{ span: 10, offset: 2, }}>
              <div className="member-content" id='about'>
                <h1>About Us</h1>
                <p><strong>"Avyaja"</strong> " implies " <strong>“Truth, Transparent & Trust.”</strong>
                  with core value of Mutual respect, Gratitude, Compassion, Honour, Candor & Integrity.
                </p>
                <p>Avyaja team is dedicated to assist the vulnerable segment of society and assist each citizen to lead a balanced and dignified life. </p>
                <p><strong>Our Vision:</strong> “To create a dignified and Humane society through Compassion and Gratitude!” </p>
                <p className='mb-5'><strong>Our Mission:</strong> “To enrich 1 million lives through Compassion helping hand by the year 2030.” </p>
                <div className='key-value'>
                  <h5>Core Values of Avyaja:</h5>
                  <ol>
                    <li><strong>Integrity:</strong> We practice professional standards, ethical behavior, transparency & honesty </li>
                    <li><strong>Mutual Respect:</strong> We are mindful of your needs and respect privacy</li>
                    <li><strong>Honour:</strong> We honour self-respect of every individual we assist</li>
                    <li><strong>Compassion:</strong> We empathize and stand with you  </li>
                    <li><strong>Gratitude:</strong> We are thankful for giving us opportuntiy to assist you</li>
                  </ol>
                </div>
                <a type='button' className='btn-yellow' href="/">Join Avyaja</a>
              </div>
            </Col>
            <Col xs={{ span: 24, offset: 0, }} lg={{ span: 12, offset: 0, }}>
              <div className="member-content-right">
                <img src={section4img6} alt="section4 image" className='img-fluid' />
              </div>
              <div className='video_container'>                         
                  <iframe width="100%" height="170" src="https://www.youtube.com/embed/oirqaeQPpGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">

                  </iframe>                
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Contentpage;