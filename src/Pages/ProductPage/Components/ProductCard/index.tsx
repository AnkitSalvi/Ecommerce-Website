import React, { Dispatch } from 'react';
import { StyledCard, ClickableContainer, StyledButton } from './styles';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { addToCart } from '../../../../redux/shopping/shopping-action';
 
const { Meta } = StyledCard;

const cardClick = () => {
   console.log("Heyyyy");
}

const ProductCard: React.FC<any> = ({product, addToCart, productLocation}) => {
  console.log("productLocation:", productLocation)
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
            ?<StyledButton >Delete</StyledButton>
            :<div></div>
          }
      </StyledCard>
  </ClickableContainer>
  );
};

const mapDispatchToProps = (dispatch: any)  => {
  return {
    addToCart: (id:any) => dispatch(addToCart(id))
  };
}

export default connect(null, mapDispatchToProps) (ProductCard);
