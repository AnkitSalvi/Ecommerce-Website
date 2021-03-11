import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import  CheckoutPage  from '../../Pages/CheckoutPage/checkoutPage/index';
import ProductPage from '../../Pages/ProductPage/index';




const Routes: React.FC = () => {
  return (
     <Router>
      <Switch>
        <Route exact path="/" component={ProductPage} />
        <Route exact path = "/shoppingCart" component={CheckoutPage}/>
      </Switch>
   </Router>
  );
}

export default Routes;
