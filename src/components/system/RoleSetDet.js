import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import HeadDet from '../public/HeadDet';
import LeftMenuDet from '../public/LeftMenuDet';
import { Table,  Divider } from 'antd';
const { Column, ColumnGroup } = Table;


const { Header, Content } = Layout;
const data = [
{
  key: '1',
  name: '李帅',
  mail:'lis@163.com',
  age: 32,
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省武汉市',
}, 
{
  key: '2',
  name: '李帅帅',
  mail:'lis@163.com',
  age: 42,
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省荆州市',
}, 
{
  key: '3',
  name: '李帅帅帅',
  age: 32,
  mail:'lis@163.com',
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省荆州市',
},
{
  key: '4',
  name: '李帅',
  mail:'lis@163.com',
  age: 32,
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省武汉市',
}, 
{
  key: '5',
  name: '李帅帅',
  mail:'lis@163.com',
  age: 42,
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省荆州市',
}, 
{
  key: '6',
  name: '李帅帅帅',
  age: 32,
  mail:'lis@163.com',
  lastLogin:'2018-02-02	18:00:00',
  address: '湖北省荆州市',
}
];


function RoleSetDet() {
  return (
    <Layout>
      <HeadDet></HeadDet>
	  <div>
		<LeftMenuDet></LeftMenuDet>
		<div  style={{margin:'0 0 0 200px'}}>
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>
			  <Table dataSource={data}>
				<Column
				  title="用户名"
				  dataIndex="name"
				  key="name"
				/>
				<Column
				  title="Age"
				  dataIndex="age"
				  key="age"
				/>
				<Column
				  title="邮箱"
				  dataIndex="mail"
				  key="mail"
				/>
				<Column
				  title="用户地址"
				  dataIndex="address"
				  key="address"
				/>
				<Column
				  title="最后登录"
				  dataIndex="lastLogin"
				  key="lastLogin"
				/>
				<Column
				  title="操作"
				  key="action"
				  render={(text, record) => (
					<span>
					  <a href="#" class="pub-a pub-a-sml blue-a"><Icon type="eye-o" />查看</a>
					  <a href="#" class="pub-a pub-a-sml green-a ml10 mr10"><Icon type="form" />编辑</a>
					  <a href="#" class="pub-a pub-a-sml red-a"><Icon type="delete" />删除</a>
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