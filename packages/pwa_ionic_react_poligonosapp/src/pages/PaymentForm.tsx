import {withRouter} from 'react-router-dom';

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React from 'react';

const PaymentForm = () => {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {

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