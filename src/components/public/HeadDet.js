import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HeadDet extends React.Component {
 
  render() {
    return (
		 <Header className="header" style={{height:'50px',lineHeight:'50px',padding:'0 20px',background:'#001529'}}>
		  <div className="logo" style={{float:'left',marginTop:'5px',lineHeight:'1'}}><img src="http://www.etoc.cn/pic/logo.png" alt="" title="" width="162" height="36" /></div>
		  <Menu theme="dark" mode="horizontal" style={{ lineHeight: '50px',float:'right' }}>
			<Menu.Item key="1"><Icon type="mail" />短信中心</Menu.Item>
			<Menu.Item key="2"><Icon type="question-circle-o" />帮助中心</Menu.Item>
			<Menu.Item key="3"><Icon type="user-add" />个人中心</Menu.Item>
		  </Menu>
		</Header>
    );
  }
}



export default HeadDet;