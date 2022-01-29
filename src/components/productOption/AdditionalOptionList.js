import React from "react";
import AdditionalOptionListItem from "./AdditionalOptionListItem";

function AdditionalOptionList({ additionalOptionList, optionSetId, optionId }) {
  return (
    <div>
      {additionalOptionList.map((additionalOption) => (
        <AdditionalOptionListItem
          key={additionalOption.id}
          additionalOptionId={additionalOption.id}
          optionSetId={optionSetId}
          optionId={optionId}
        />
      ))}
    </div>
  );
}

export default AdditionalOptionList;
