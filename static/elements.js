(function() {
    'use strict';
  
    var elements = stripe.elements({
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
      // Stripe's examples are localized to specific languages, but if
      // you wish to have Elements automatically detect your user's locale,
      // use `locale: 'auto'` instead.
      locale: window.__exampleLocale
    });
  
    var card = elements.create('card', {
      iconStyle: 'solid',
      style: {
        base: {
          iconColor: '#424242',
          color: '#424242',
          fontWeight: 500,
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
  
          ':-webkit-autofill': {
            color: '#424242',
          },
          '::placeholder': {
            color: '#424242',
          },
        },
        invalid: {
          iconColor: '#424242',
          color: '#e53935',
        },
      },
    });
    card.mount('#example1-card');
  
    registerElements([card], 'example1');
  })();