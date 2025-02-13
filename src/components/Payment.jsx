import React from "react";

const Payment = () => {
  return (
    <div>
      <h1>Payment</h1>
      <form>
        <div>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" required />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="text" name="expiryDate" required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
