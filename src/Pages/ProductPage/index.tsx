import React from 'react';

import { Container } from './styles';
import  ProductCard  from './Components/ProductCard/index'
import  Header from '../../Components/Header/index'
import { SideBar } from '../../Components/SideBar';
import { Row, Col} from 'antd';
import { connect } from 'react-redux';
import { Product } from '../../Model/ReduxShopState';

interface ProductArray {
  products: Product[]
}

const ProductPage: React.FC<ProductArray> = ({products}:ProductArray) => {
  return (
    <Container>
      <Row>
        <Col span={24}>
            <Header/>
        </Col>
        <Col span={4}>
            <SideBar/>
        </Col>
       
        {
          products.map((prod:any) => {        
            return(
              <Col span={5}>
                <ProductCard key={prod.itemID} product={prod} productLocation = "shoppingPage"/>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
};


const mapStateToProps = (state: any) => {
  return{
    products: state.shop.product
  };
}

export default connect(mapStateToProps)(ProductPage);
