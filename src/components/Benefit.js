import { productRegisterFormState } from "atoms/productRegisterForm";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useSetRecoilState } from "recoil";
import Mileage from "./Mileage";
import ThxCard from "./ThxCard";
function Benefit() {
  const [isMileageOn, setIsMileageOn] = useState(false);
  const [isThxCardOn, setIsThxCardOn] = useState(false);
  const setProductForm = useSetRecoilState(productRegisterFormState);

  useEffect(() => {
    setProductForm((prev) => ({
      ...prev,
      마일리지적립: isMileageOn,
      감사카드제공: isThxCardOn,
    }));
  }, [isMileageOn, isThxCardOn, setProductForm]);

  return (
    <>
      <Mileage isMileageOn={isMileageOn} setIsMileageOn={setIsMileageOn} />
      <ThxCard isThxCardOn={isThxCardOn} setIsThxCardOn={setIsThxCardOn} />
    </>
  );
}

export default Benefit;
