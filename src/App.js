
import React from 'react';
import { Layout } from 'antd';
import Mylayout from './componets/Mylayout/Mylayout';
import Myfooter from './componets/Footerpage/Myfooter';
import Contentpage from './componets/Contentpage/Contentpage';
import FixedLinkicon from './componets/FixedLinkicons/FixedLinkicon';
// import TawkTo from './componets/TawkTopage/TawkTo';
import './App.css';
import Main from "./componets/Main";
import CardSlider from './componets/CardSlider/CardSlider';
const { Content } = Layout;
function App() {
  return (

    <div className="App" style={{ height: "100%" }}>
      <Layout>
        <Layout>
          <div>
            <Mylayout />          
          </div>          
          <Content>
            {/* <TawkTo /> */}
            <div style={{ marginTop: "0px" }}>
              <Main />
              <Contentpage />

              <p style={{ color: 'black' }}>
                <CardSlider />
              </p>
            </div>
          </Content>          
            <div className='footer'>
              <Myfooter />
            </div>          
        </Layout>
      </Layout>
        <FixedLinkicon />

    </div>
  );
}

export default App;
