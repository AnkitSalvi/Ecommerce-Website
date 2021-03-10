import React from 'react';
import 'antd/dist/antd.css';

import { Layout, Radio } from 'antd';

import { StyledSider, StyledLayout, StyledRadioGroup } from './styles';
import Column from 'antd/lib/table/Column';


const { Header, Content, Sider } = Layout;

export const SideBar: React.FC = () => {
  return (
    <StyledLayout >
      <StyledSider>
        <StyledRadioGroup>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </StyledRadioGroup>
      </StyledSider>
    </StyledLayout>
  );
};

//export default SideBar;
