import React from 'react';

import { Container } from './styles';
import { Button } from 'antd';

const Payment: React.FC = () => {
  
  const loadRazorPay:Promise = async(src:string) => {
      return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;

          script.onload = () => {
            resolve(true);
          }

          script.onerror = () => {
            resolve(false);
          }

          document.body.appendChild(script);

      })
  }

  const __DEV__ = document.domain === 'localhost';

  const displayRazorPay = async() => {
     const res =  await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js');

     if(!res){
       alert('RazorPay SDK failed to load.Are you online');
     }


      var options = {
        "key": __DEV__ ? 'rzp_test_XuFXfKwAPIXtG9':'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    }
  }

  return (
    <Container>
      <Button onClick={displayRazorPay}>Razoy Pay</Button>
    </Container>
  );
};

export default Payment;
