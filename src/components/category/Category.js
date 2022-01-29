import React, { useState, useEffect } from "react";
import Input from "components/common/Input";
import styled from "styled-components";
import Button from "components/common/Button";
import theme from "styles/theme";
import { scrollbar } from "styles/utilsStyles";
import { useSetRecoilState } from "recoil";
import { productRequiredInfoState } from "atoms/productRequiredInfo";
import { productRegisterFormState } from "atoms/productRegisterForm";
import { categoryListData } from "utils/constants";

function Category() {
  const [categoryList, setCategoryList] = useState(categoryListData);
  const setProductRequried = useSetRecoilState(productRequiredInfoState);
  const setProductForm = useSetRecoilState(productRegisterFormState);

  const onToggleChecked = (id) => {
    setCategoryList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const onChange = (id) => onToggleChecked(id);
  const onDelete = (clickedId) => onToggleChecked(clickedId);

  useEffect(() => {
    setProductRequried((prev) => ({
      ...prev,
      productCategory: categoryList.some((category) => category.checked),
    }));
  }, [categoryList, setProductRequried]);

  useEffect(() => {
    setProductForm((prev) => ({
      ...prev,
      카테고리: categoryList.filter((category) => category.checked),
    }));
  }, [categoryList, setProductForm]);

  return (
    <Box>
      <Label>카테고리 *</Label>
      <CategoryList>
        {categoryList.map((item) => (
          <CategoryItem key={`category_list${item.id}`}>
            <Input
              onChange={() => onChange(item.id)}
              height="20"
              width="20"
              type="checkbox"
              value={item.name}
              checked={item.checked}
            ></Input>
            {item.name}
          </CategoryItem>
        ))}
      </CategoryList>
      <SelectedCategoryList>
        {categoryList.map((item) => (
          <React.Fragment key={`selected_category_list${item.id}`}>
            {item.checked && (
              <SelectedCategory>
                {item.name}
                <Button size="xm" onClick={() => onDelete(item.id)}>
                  X
                </Button>
              </SelectedCategory>
            )}
          </React.Fragment>
        ))}
      </SelectedCategoryList>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
`;

const Label = styled.div`
  padding: 20px;
  width: 130px;
  background-color: ${theme.colors.lightGray};
`;

const CategoryList = styled.div`
  width: 60%;
  height: 200px;
  padding: 10px;
  overflow-y: scroll;
  border: 1px solid ${theme.colors.border1};
  border-radius: 6px;
  ${scrollbar}
`;
const CategoryItem = styled.div`
  display: flex;
  align-items: center;
`;
const SelectedCategoryList = styled.div`
  flex: 1 auto;
  padding: 10px;
  border: 1px solid ${theme.colors.border1};
  height: 200px;
  overflow-y: scroll;
  border-radius: 6px;
  ${scrollbar}
`;
const SelectedCategory = styled.div`
  height: 30px;
  background: #e8eaf6;
  margin: 5px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #3f51b5;
`;

export default Category;
