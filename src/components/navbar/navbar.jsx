import React, { Children } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate,Link,NavLink } from 'react-router-dom';
import Home from '../pages/home';
import './navbar.css'
const { Header, Content, Footer } = Layout;
const items = [
    {
        label : 'Home',
        key : '/home'
    },
    {
        label : 'About',
        key : '/about'
    },
    {
        label : 'Contact',
        key : '/contact'
    }

]
const Navbar = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
    // {Children}
  } = theme.useToken();
  const navigate = useNavigate();
  const navCss = ({isActive})=>{
    return{
        color: isActive ? 'blue' : 'white',
    }
  }
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        {/* <NavLink style={navCss} to={'/home'}><h1 style={{margin: '20px', color: 'white'}}>Home</h1></NavLink>
        <NavLink style={navCss} to={'/about'}><h1 style={{margin: '20px', color: 'white'}}>About</h1></NavLink>
        <NavLink style={navCss} to={'/contact'}><h1 style={{margin: '20px', color : 'white'}}>Contact</h1></NavLink> */}

        {/* <Link to={'/home'}><h1 style={{margin: '20px', color: 'white'}}>Home</h1></Link>
        <Link to={'/about'}><h1 style={{margin: '20px', color: 'white'}}>About</h1></Link>
        <Link to={'/contact'}><h1 style={{margin: '20px', color : 'white'}}>Contact</h1></Link> */}

        <Menu
        onClick={data=>(navigate(data.key))}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            {children}
          {/* Content */}
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};
export default Navbar;