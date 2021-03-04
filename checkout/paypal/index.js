paypal.Buttons({
  createOrder: function (data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '38.97',
          currency_code: "USD",
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to buyer.
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  },
  // Does not support international shipping
  onShippingChange: function (data, actions) {
    if (data.shipping_address.country_code !== 'US') {
      return actions.reject();
    }
    return actions.resolve();
  }
}).render('#paypal-btn');