import React from "react";

const Shipment = () => {
  // Sample shipment details
  const shipmentDetails = {
    trackingNumber: "123456789",
    carrier: "DHL",
    estimatedDelivery: "2023-10-15",
  };

  return (
    <div>
      <h1>Shipment</h1>
      <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
      <p>Carrier: {shipmentDetails.carrier}</p>
      <p>Estimated Delivery: {shipmentDetails.estimatedDelivery}</p>
    </div>
  );
};

export default Shipment;
