import React from "react";
import AdditionalOptionListItem from "./AdditionalOptionListItem";

function AdditionalOptionList({ additionalOptionList }) {
  return (
    <div>
      {additionalOptionList.map((additionalOption) => (
        <AdditionalOptionListItem key={additionalOption.id} />
      ))}
    </div>
  );
}

export default AdditionalOptionList;
