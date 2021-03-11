import React from 'react';

import { Container } from './styles';
import ProductCard from '../../ProductPage/Components/ProductCard';
import { connect } from 'react-redux';
import { Row,Col } from 'antd';
import { Header } from 'antd/lib/layout/layout';

const checkoutPage: React.FC = ({cartItems}:any) => {
  console.log("ShoppingCart");
  console.log("cartItem:", cartItems)
  return (
    <Container>
      <Row>
        <Col span={24}>
          <Header></Header>
        </Col>
          {
            cartItems.map((cartItem:any) => {
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


export default connect(mapStateToProps)(checkoutPage);
