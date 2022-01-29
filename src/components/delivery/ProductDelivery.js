import React, { useState } from "react";
import DesignatedShipping from "./DesignatedShipping";
import Pickup from "./Pickup";
import PreOrder from "./PreOrder";

function ProductDelivery() {
  const [shippingOn, setShippingOn] = useState(false);
  const [pickupOn, setPickupOn] = useState(false);
  const [preOrderOn, setPreOrderOn] = useState(false);

  return (
    <>
      <DesignatedShipping
        shippingOn={shippingOn}
        setShippingOn={setShippingOn}
        setPreOrderOn={setPreOrderOn}
      />
      <Pickup
        pickupOn={pickupOn}
        setPickupOn={setPickupOn}
        setPreOrderOn={setPreOrderOn}
      />
      <PreOrder
        preOrderOn={preOrderOn}
        setPreOrderOn={setPreOrderOn}
        setShippingOn={setShippingOn}
        setPickupOn={setPickupOn}
      />
    </>
  );
}

export default ProductDelivery;
