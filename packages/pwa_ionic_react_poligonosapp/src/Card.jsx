//https://youtu.be/IhvtIbfDZJI?list=PLy1nL-pvL2M6HFApWUDSGA4Y7btyKx7cE
import { withRouter } from 'react-router-dom';
import { CardElement, useElments, useStripe } from '@stripe/react-stripe-js';
import StatusMessages, {useMessages} from './StatusMessages';

const stripe = useStripe();

const Card = () => {

    const elements = useElements();
    const stripe = useStripe();
    const [messages, addMessage] = useMessages();

    const handleSubmit = async (e) => {
        e.preventDefaul();
        if (!stripe || !elements) {
            return;
        }

        addMessage('Creating payment intent...');

        const { clientSecret } = await fetch('./create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'eur',
            }),  
        }).then(r => r.json());

        if (backendError) {
            addMessage(backendError.message);
            return;
        }
        
        addMessage('Payment intent created');

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            }
        )

        if (stripeError) {
            addMessage(stripeError.message);
            return;
        }

        addMessage('PaymentIntent (${paymentIntent.id}): (${paymentIntent}):');

    }

    return(

            <h1>Card<h1>

            <form id="payment-form" onSubmit={handleSubmit}>

                <label htmlFor="card-element">Card</label>
                
                <CardElement id="card-element" />
                
                <button>Pay</button>

            </form>

            <StatusMessages messages={messages}></StatusMessages>

    )

}

export default withRouter(Card);