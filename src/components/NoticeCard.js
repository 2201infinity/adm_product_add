import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import CustomButton from "./common/CustomButton";
import useForm from "hooks/useForm";

const noticeDocs = [
  {
    id: 1,
    title: "제품명 / 중량",
    category: "productName",
    placeholder: "제품명 / 중량을 입력해주세요.",
    essential: true,
  },
  {
    id: 2,
    title: "원산지 / 원재료 함량",
    category: "origin",
    placeholder: "원산지 / 원재 함량을 입력해주세요.",
    essential: true,
  },
  {
    id: 3,
    title: "등급",
    category: "grade",
    placeholder: "등급(근내지방도 수치)를 입력해주세요.",
    essential: true,
  },
  {
    id: 4,
    title: "보관",
    category: "storage",
    placeholder: "보관 방식을 입력해주세요.",
    essential: true,
  },
  {
    id: 5,
    title: "식품 유형",
    category: "foodType",
    placeholder: "식품 유형을 입력해주세요. (ex) 포장육",
    essential: true,
  },
];

function ProductInfo({ cardNumber, itemId, onDeleteCard, ...rest }) {
  const { handleChange, handleSubmit } = useForm({
    initialValues: {
      productName: "",
      origin: "",
      grade: "",
      storage: "",
      foodType: "",
    },
  });

  const [inputList, setInputList] = useState(noticeDocs);

  const onDeleteCategory = (id) => {
    setInputList((prev) => prev.filter((item) => item.id !== id));
  };

  const optionForm = useForm({ initialValues: { title: "", placeholder: "" } });

  const onAddCategory = () => {
    const { title, placeholder } = optionForm.values;
    if (title === "" || placeholder === "") return;

    const id = Math.random();
    optionForm.clear();

    setInputList([
      ...inputList,
      {
        id,
        title,
        category: title,
        placeholder,
        essential: false,
      },
    ]);
  };

  return (
    <NoticeCard>
      <CardHeader>
        <h1> 정보고시 {cardNumber}</h1>
        <CustomButton
          onClick={() => onDeleteCard(itemId)}
          variant="secondary"
          width="50"
          height="30"
        >
          삭제
        </CustomButton>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        {inputList.map((option) => {
          const { id, title, category, placeholder, essential } = option;
          return (
            <NoticeFormWrapper key={id}>
              <p>{title}</p>
              <Input
                onChange={handleChange}
                name={category}
                width="300"
                placeholder={placeholder}
              />
              {!essential && (
                <CustomButton
                  width="60"
                  height="38"
                  variant="primary"
                  onClick={() => onDeleteCategory(id)}
                >
                  삭제
                </CustomButton>
              )}
            </NoticeFormWrapper>
          );
        })}
        <AddCategoryWrapper>
          <Input
            name="title"
            placeholder="항목 제목 자유 입력"
            onChange={optionForm.handleChange}
            value={optionForm.values.title}
          />
          <Input
            name="placeholder"
            width="300"
            placeholder="내용을 입력해주세요"
            onChange={optionForm.handleChange}
            value={optionForm.values.placeholder}
          />
        </AddCategoryWrapper>
        <AddButton
          width="100"
          height="38"
          variant="secondary"
          onClick={onAddCategory}
          type="button"
        >
          항목 추가
        </AddButton>
      </form>
    </NoticeCard>
  );
}

export default ProductInfo;

const NoticeCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;

  h1 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  margin-bottom: 20px;
`;

const NoticeFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  margin-bottom: 10px;

  p {
    font-size: 14px;
  }
`;

const AddButton = styled(CustomButton)`
  margin-top: 25px;
  font-weight: 400;
  border: 1px solid #d3d3d3;
  border-radius: 0;
`;

const AddCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  padding: 0;
`;
