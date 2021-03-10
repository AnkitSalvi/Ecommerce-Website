import React from 'react';

import { Container } from './styles';
import  ProductCard  from './Components/ProductCard/index'
import  Header from '../../Components/Header/index'
import { SideBar } from '../../Components/SideBar';
import { Row, Col} from 'antd';
import { connect } from 'react-redux';


const ProductPage: React.FC = ({products}:any) => {
  console.log("products:",products)
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
                <ProductCard key={prod.itemID} product={prod}/>
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
