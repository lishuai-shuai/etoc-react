import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import HeadDet from '../public/HeadDet';
import LeftMenuDet from '../public/LeftMenuDet';
import { Table,  Divider } from 'antd';
const { Column, ColumnGroup } = Table;


const { Header, Content } = Layout;
const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


function RoleSetDet() {
  return (
    <Layout>
      <HeadDet></HeadDet>
	  <div>
		<LeftMenuDet></LeftMenuDet>
		<div  style={{margin:'0 0 0 200px'}}>
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>
			  <Table dataSource={data}>
				<ColumnGroup title="Name">
				  <Column
					title="First Name"
					dataIndex="firstName"
					key="firstName"
				  />
				  <Column
					title="Last Name"
					dataIndex="lastName"
					key="lastName"
				  />
				</ColumnGroup>
				<Column
				  title="Age"
				  dataIndex="age"
				  key="age"
				/>
				<Column
				  title="Address"
				  dataIndex="address"
				  key="address"
				/>
				<Column
				  title="Action"
				  key="action"
				  render={(text, record) => (
					<span>
					  <a href="#">Action һ {record.name}</a>
					  <Divider type="vertical" />
					  <a href="#">Delete</a>
					  <Divider type="vertical" />
					  <a href="#" className="ant-dropdown-link">
						More actions <Icon type="down" />
					  </a>
					</span>
				  )}
				/>
			  </Table>
			</Content>
	    </div>
	  </div>
    </Layout>
  );
}


export default RoleSetDet;