import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import HeadDet from '../public/HeadDet';
import LeftMenuDet from '../public/LeftMenuDet';

const { Header, Content } = Layout;

function RoleSetDet() {
  return (
    <Layout>
      <HeadDet></HeadDet>
	  <div>
		<LeftMenuDet></LeftMenuDet>
		<div>
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}></Content>
	    </div>
	  </div>
    </Layout>
  );
}


export default RoleSetDet;