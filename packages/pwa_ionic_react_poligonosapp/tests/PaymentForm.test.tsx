test('should stripe auth and connect', () => {

    const Stripe = require('stripe');
const stripe = Stripe(process.env.GLOBAL);

stripe.charges.retrieve(process.env.STRIPE_A, {
  api_key: process.env.STRIPE_B
});
      expect(stripe).toBeNull();

});