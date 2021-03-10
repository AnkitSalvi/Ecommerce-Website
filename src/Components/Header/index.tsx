import React from 'react';
import MyntraLogo from "../../assets/Myntra_logo.png";
import { Menu, Dropdown, Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


import { Container, DesktopLogo, HeaderButton, HeaderButtonIcon, HeaderButtonText, HeaderIconButton, StyledSelect} from './styles';



export const Header: React.FC = () => {

  const { Option } = Select;

  const menu =  () => (
    <Menu>
      <Menu.Item >
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item >
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Item >3rd menu item</Menu.Item>
  </Menu>
  );

  const options = [{value:"First"},{value:"Second"}].map(d => <Option value={d.value}>{d.value}</Option>);
    
  

  return (
    <Container>
			<DesktopLogo/> 
       <HeaderButton><b>Men</b></HeaderButton>
       <HeaderButton><b>Women</b></HeaderButton>
       <HeaderButton><b>Kids</b></HeaderButton>
       <HeaderButton><b>Home & Living</b></HeaderButton>
       <HeaderButton><b>Other</b></HeaderButton> 



      <Dropdown overlay={menu} trigger={['click']}>
        <HeaderIconButton>
          <HeaderButtonIcon/>
          <HeaderButtonText>Bag</HeaderButtonText> 
        </HeaderIconButton>
      </Dropdown>

      <Dropdown overlay={menu} trigger={['click']}>
        <HeaderIconButton>
          <HeaderButtonIcon />
          <HeaderButtonText>WishList</HeaderButtonText> 
        </HeaderIconButton>
      </Dropdown>

      <Dropdown overlay={menu} trigger={['click']}>
        <HeaderIconButton>
          <HeaderButtonIcon />
          <HeaderButtonText>Profile</HeaderButtonText> 
        </HeaderIconButton>
      </Dropdown>

      <StyledSelect
        showSearch
        placeholder="Search for product,brand and more"
        optionFilterProp="children"        
        filterOption={(input, option) =>
          option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        

      >
        {options}
      </StyledSelect>

    </Container>

    );
  };
  
  //export default Header;
  