import React from 'react';
import { StyledCard, ClickableContainer, StyledButton } from './styles';
import 'antd/dist/antd.css';

const { Meta } = StyledCard;

const cardClick = () => {
   console.log("Heyyyy");
}

const ProductCard: React.FC<any> = ({product}) => {
  console.log("Heyyyyy")
  console.log(product);
  return (
    <ClickableContainer onClick={cardClick}>
        <StyledCard
          hoverable
          style={{ width: 200 }}
          cover={<img alt="example" src = {product.image} />}
        >
          <Meta title = {product.title} description = {product.description} />
          <StyledButton>Add to Cart</StyledButton>
      </StyledCard>
  </ClickableContainer>
  );
};


export default ProductCard;
