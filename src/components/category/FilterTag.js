import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";
import theme from "styles/theme";
import { productRegisterFormState } from "atoms/productRegisterForm";
import { useSetRecoilState } from "recoil";
import { filterTagData } from "utils/constants";

function FilterTag() {
  const [tagList, setTagList] = useState(filterTagData);
  const setProductForm = useSetRecoilState(productRegisterFormState);
  const [focusOn, setFocusOn] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const filterBoxRef = useRef();
  const onToggleChecked = (id) => {
    setTagList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    setQuery("");
  };

  const onClick = (id) => {
    onToggleChecked(id);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    filterItems(filterTagData, query);
  }, [query]);

  const filterItems = (items, query) => {
    query = query.toLowerCase();
    setSearchResult(
      items.filter((item) =>
        item.name
          .split(" ")
          .some((word) => word.toLowerCase().startsWith(query))
      )
    );
  };

  useEffect(() => {
    setProductForm((prev) => ({
      ...prev,
      필터태그: tagList.filter((item) => item.checked),
    }));
  }, [setProductForm, tagList]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterBoxRef.current && !filterBoxRef.current.contains(e.target)) {
        setFocusOn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterBoxRef]);

  return (
    <>
      <FilterBox>
        <div ref={filterBoxRef}>
          <SearchBar>
            <Label>필터 태그</Label>
            <FilterInput
              type="text"
              value={query}
              onChange={onChange}
              onFocus={() => setFocusOn(true)}
              placeholder="검색어를 입력하세요."
            />
          </SearchBar>
          <TagBox>
            {focusOn && <p>지정된 필터 태그</p>}
            <SelectedTagList>
              {tagList.map((item) => (
                <React.Fragment key={`tag_list${item.id}`}>
                  {item.checked && (
                    <SelectedTag>
                      {item.name}
                      <Button size="xm" onClick={() => onClick(item.id)}>
                        x
                      </Button>
                    </SelectedTag>
                  )}
                </React.Fragment>
              ))}
            </SelectedTagList>
          </TagBox>

          {focusOn && (
            <TagList>
              {searchResult.length !== 0 ? (
                searchResult.map((item) => (
                  <React.Fragment key={`search_tag_list${item.id}`}>
                    {!item.checked && (
                      <Tag onClick={() => onClick(item.id)}>{item.name}</Tag>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p> 검색 결과가 존재하지 않습니다.</p>
              )}
            </TagList>
          )}
        </div>
      </FilterBox>
    </>
  );
}

export default FilterTag;

const FilterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.border1};
  border-radius: 6px;
  justify-content: space-around;
`;

const Label = styled.div`
  background-color: ${theme.colors.lightGray};
  width: 130px;
  height: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const FilterInput = styled(Input)`
  flex: 1 auto;
`;

const SearchBar = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.border1};
`;

const TagBox = styled.div`
  margin: 10px;
`;

const TagList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  height: 80px;
  margin: 10px;
  padding-top: 10px;
  border: 1px solid grey;
  border-radius: 6px;
`;

const Tag = styled.div`
  text-align: center;
  margin: 2px;
  border: 1px solid;
  height: 30px;
  background-color: #e0f4cb;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
`;

const SelectedTagList = styled.div`
  display: flex;
  height: 40px;
  margin: 10px;
  width: 100%;
`;

const SelectedTag = styled.div`
  border: 1px solid;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  height: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding-left: 3px;
  padding-right: 0px;
  background-color: #e0f4cb;
`;
