import useToggle from "hooks/useToggle";
import React from "react";
import AlertModal from "./common/AlertModal";

function ProductOption() {
  const [isModal, onToggleModal] = useToggle();
  return (
    <div>
      ProductOption
      <button onClick={onToggleModal}>버튼 이름</button>
      {isModal && (
        <AlertModal
          isModal={isModal}
          onToggleModal={onToggleModal}
          message="필수값을 모두 입력해주세요."
        />
      )}
    </div>
  );
}

export default ProductOption;
