import React from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Batsmen, Bowler } from './Cricketer';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src="./dp.png" />
          <Title style={{ color: 'white' }} level={3}>
            Serendip
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard' >
                Dashboard
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'>Location 1</Menu.Item>
                  <Menu.Item key='location2'>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 680 }}>
                <Batsmen name = 'S.P.D. Smith' team = 'AUS' runs = '6973'/> 
                <Bowler name = 'Pat Cummins' team = 'AUS' wickets = '123' />             
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Created by Iqra</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
