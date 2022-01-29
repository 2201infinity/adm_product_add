import React, { useState } from "react";
import Mileage from "./Mileage";
import ThxCard from "./ThxCard";
function Benefit() {
  const [isMileageOn, setIsMileageOn] = useState(false);
  const [isThxCardOn, setIsThxCardOn] = useState(false);

  return (
    <>
      <Mileage isMileageOn={isMileageOn} setIsMileageOn={setIsMileageOn} />
      <ThxCard isThxCardOn={isThxCardOn} setIsThxCardOn={setIsThxCardOn} />
    </>
  );
}

export default Benefit;
