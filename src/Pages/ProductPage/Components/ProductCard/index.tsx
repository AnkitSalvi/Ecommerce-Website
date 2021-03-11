import React, {useEffect, useState} from 'react';
import { StyledCard, ClickableContainer, StyledButton } from './styles';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { addToCart, deleteFromCart } from '../../../../redux/shopping/shopping-action';
import { Cart, Product} from '../../../../Model/ReduxShopState';
 
const { Meta } = StyledCard;

const cardClick = () => {
   console.log("Heyyyy");
}

interface ProductCardProps{
    cartItems: Cart[],
    product:Product,
    addToCart:(id:string)=>{};
    productLocation:string,
    deleteFromCart:(id:string)=>{}
}

const ProductCard: React.FC<ProductCardProps> = ({cartItems, product, addToCart, productLocation, deleteFromCart}:ProductCardProps) => {
  console.log("deleteCart:", cartItems)
  return (
    <ClickableContainer onClick={cardClick}>
        <StyledCard
          hoverable
          style={{ width: 200 }}
          cover={<img alt="example" src = {product.image} />}
        >
          <Meta title = {product.title} description = {product.description} />
          <StyledButton onClick={() => addToCart(product.itemID)}>Add to Cart</StyledButton>
          {productLocation === "cart"
            ?<StyledButton onClick={()=>deleteFromCart(product.itemID)}>Delete</StyledButton>
            :<div></div>
          }
      </StyledCard>
  </ClickableContainer>
  );
};

const mapDispatchToProps = (dispatch: any)  => {
  return {
    addToCart: (id:string) => dispatch(addToCart(id)),
    deleteFromCart: (id:string) => dispatch(deleteFromCart(id))
  };
}



const mapStateToProps = (state:any) => {
  return{
    cartItems:state.shop.cart
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (ProductCard);
