import React from 'react';

import { Container } from './styles';
import { Button } from 'antd';
import { OrderIDdata } from '../../Model/OrderIdObject';

const Payment: React.FC = () => {
  
  const __DEV__ = document.domain === 'localhost';

  const displayRazorPay = async() => {
     if(!(window as any).Razorpay){
       alert('RazorPay SDK failed to load.Are you online');
     }

     const data:OrderIDdata = await fetch('http://localhost:5000/razorpay', { method: 'POST'}).then((t:any) => 
         t.json()
     )

     console.log("data:", data)


      var options = {
        "key": __DEV__ ? 'rzp_test_XuFXfKwAPIXtG9':'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
        amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: data.currency,
        "name": "Myntra Clone",
        "description": "Test Transaction",
        image: "http://localhost:5000/logo.png",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response:any){
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

    

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open(); 
     
  }

  return (
    <Container>
      <Button style={{marginLeft:'550px', marginTop:'300px'}} onClick={displayRazorPay}>Paisa De Do hame</Button>
    </Container>
  );
};

export default Payment;
