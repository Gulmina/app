
import './App.css'

import React, { useState } from 'react';
import { Button, Input} from 'antd';

import { DatePicker } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

/* const currentDate = new Date()
currentDate.getDay() */

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentDate = new Date()
  currentDate.getDay()

  return (

<>


    
{/* <div class="container-fluid text-center">
  <div class="row align-items-center border-2 border-solid m-10">
    <div class="col border-2 border-solid m-20">
      One of three columns
    </div>
    <div class="col border-2 border-solid m-20">
      One of three columns
    </div>
    <div class="col border-2 border-solid m-20">
      One of three columns
    </div>
  </div>
</div> */}



    <Layout   className="bg-sky-200" style={{ minHeight: '100vh' }}>

 {/*      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider> */}

      <Layout>


        <Header style={{ padding: 0}} />
      
          <div
            style={{
              padding: 24,
              minHeight: 360,
         
              borderRadius: borderRadiusLG,
            }}
            className="bg-sky-200"
          >
        <div className="text-center text-3xl">
         <h1 className="m-6">Hi , welcome to your Grocery-Reminder</h1>
         {/* <h2 className="text-red-400">Choose Day And Date</h2> */}
         <div className="text-red-400">{/* <DatePicker onChange={onChange} /> */}  {currentDate.toDateString()}</div>

         <div>
           <input type="text"> Add Item</input>
         </div>
         <div style={{ width: '100%' }}>
         <input type="text" value="Hello" />
      <Button type="primary">Submit</Button>
    </div>

        </div>
          </div>
       


        <Footer style={{ textAlign: 'center' }}>
         {/*  Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>

    </>
  )
}

export default App
