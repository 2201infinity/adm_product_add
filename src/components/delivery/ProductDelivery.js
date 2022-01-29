import { productRegisterFormState } from "atoms/productRegisterForm";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import DesignatedShipping from "./DesignatedShipping";
import Pickup from "./Pickup";
import PreOrder from "./PreOrder";

function ProductDelivery() {
  const [shippingOn, setShippingOn] = useState(false);
  const [pickupOn, setPickupOn] = useState(false);
  const [preOrderOn, setPreOrderOn] = useState(false);
  const setProductForm = useSetRecoilState(productRegisterFormState);

  useEffect(() => {
    setProductForm((prev) => ({
      ...prev,
      상품배송설정: {
        사용자배송일출발일지정: shippingOn,
        방문수령: pickupOn,
        선주문예약배송: preOrderOn,
      },
    }));
  }, [shippingOn, pickupOn, preOrderOn, setProductForm]);

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
