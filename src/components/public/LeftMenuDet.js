import React from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class LeftMenuDet extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div style={{ width: 220,backgroundColor:'#001529',height:700,float:'left'}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16,display:'none' }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['5']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>统计管理</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="desktop" /><span>系统管理</span></span>}>
            <Menu.Item key="5">用户管理</Menu.Item>
            <Menu.Item key="6">角色管理</Menu.Item>
            <Menu.Item key="7">系统日志</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}



export default LeftMenuDet;