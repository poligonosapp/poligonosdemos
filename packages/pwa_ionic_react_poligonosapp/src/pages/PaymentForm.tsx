import './theme/stripe.css-FUNnnQD3';

import { withRouter } from 'react-router-dom';

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React from 'react';

  // Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes

  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    },
    complete: {
      iconColor: "#cbf4c9"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };

const PaymentForm = () => {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e:any) => {

        e.preventDeafult();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        console.log('card', cardElement);
        console.log('stripe', stripe);

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Pay</button>
    </form>
)


}

export default withRouter(PaymentForm);