import React, {useState, useEffect} from 'react';
import MyntraLogo from "../../assets/Myntra_logo.png";
import { Menu, Dropdown, Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'


import { Container, DesktopLogo, HeaderButton, HeaderButtonIcon, HeaderButtonText, HeaderIconButton, StyledSelect} from './styles';
import { Link } from 'react-router-dom';


const Header: React.FC = ( {cart}:any ) => {

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
  
  let cartSize = 0;
  cartSize = cart.map((cartItem:any) => cartSize = cartSize + cartItem.qnt)

  const [cartCount, setCartCount] = useState(0);

    
    useEffect(() => {    
      let cartSize = 0;
      cart.forEach((cartItem:any) => {
        cartSize = cartSize + parseInt(cartItem.qnt)
      });
      setCartCount(cartSize)
    },[cart])

  return (
    <Container>
			<DesktopLogo/> 
       <HeaderButton><b>Men</b></HeaderButton>
       <HeaderButton><b>Women</b></HeaderButton>
       <HeaderButton><b>Kids</b></HeaderButton>
       <HeaderButton><b>Home & Living</b></HeaderButton>
       <HeaderButton><b>Other</b></HeaderButton> 



       <Link to="/shoppingCart">
          <HeaderIconButton>
            <HeaderButtonIcon/>
              <HeaderButtonText>Bag</HeaderButtonText> 
                {cartSize}
          </HeaderIconButton>
        </Link>

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

  const mapStateToProps = (state: any) => {
      return{
        cart : state.shop.cart
      };
  } 
  
  export default connect(mapStateToProps)(Header);
  