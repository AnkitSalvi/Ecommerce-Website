import React, {useEffect, useState} from 'react';

import { Container } from './styles';
import ProductCard from '../../ProductPage/Components/ProductCard';
import { connect } from 'react-redux';
import { Row,Col } from 'antd';
import  Header  from '../../../Components/Header/index';
import { Cart } from '../../../Model/ReduxShopState';

interface CartArray {
  cartItems: Cart[],
}

const CheckoutPage: React.FC<CartArray> = ({cartItems}:CartArray) => {

  console.log("cartItems:", cartItems)
   const [cartPrice, setCartPrice] = useState(0)

  useEffect(()=>{
    let totalPrice = 0;
    cartItems.forEach((cartItem:Cart) => {
        totalPrice = totalPrice + cartItem.price * cartItem.qnt
    });
    setCartPrice(totalPrice)
    console.log("totalPrice:",totalPrice)
  },[cartItems, cartPrice])

  return (
    <Container>
      <Row>
        <Col span={24}>
          <Header/>
        </Col>
        <Col>{cartPrice}</Col>
          {
            cartItems.map((cartItem:Cart) => {
              return(
                <Col span={18}>
                    <ProductCard key={cartItem.itemID} product={cartItem} productLocation = "cart"/>
                </Col>
              )
            })
          }
      </Row>
    </Container>
  );
};


const mapStateToProps = (state:any) => {
  return{
    cartItems:state.shop.cart
  }
}


export default connect(mapStateToProps)(CheckoutPage);
