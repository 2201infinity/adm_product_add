import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";

const tags = [
  { id: "0", name: "tag0", checked: false },
  { id: "1", name: "tag1", checked: false },
  { id: "2", name: "tag2", checked: false },
  { id: "3", name: "tag3", checked: false },
  { id: "4", name: "tag4", checked: false },
  { id: "5", name: "tag5", checked: false },
  { id: "6", name: "tag6", checked: false },
  { id: "7", name: "tag7", checked: false },
  { id: "8", name: "tag8", checked: false },
  { id: "9", name: "tag9", checked: false },
  { id: "10", name: "tag10", checked: false },
];

function FilterTag() {
  const [tagList, setTagList] = useState(tags);
  const [focusOn, setFocusOn] = useState(false);
  const [query, setQuery] = useState("");

  const onToggleChecked = (id) => {
    setTagList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const onClick = (id) => {
    onToggleChecked(id);
  };

  const onFocusInput = () => {
    setFocusOn((prev) => !prev);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = (items, query) => {
    query = query.toLowerCase();
    return items.filter((item) =>
      item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
    );
  };
  const searchResult = filterItems(tags, query);

  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <FilterBox>
      <span>필터 태그</span>
      <Input
        value={query}
        onChange={onChange}
        onClick={onFocusInput}
        placeholder="검색어를 입력하세요."
      />

      {focusOn && <span>지정된 필터 태그</span>}
      <SelectedTagList>
        {tagList.map((item) => (
          <React.Fragment key={`tag_list${item.id}`}>
            {item.checked && (
              <SelectedTag>
                {item.name}
                <Button size="sm" onClick={() => onClick(item.id)}>
                  x
                </Button>
              </SelectedTag>
            )}
          </React.Fragment>
        ))}
      </SelectedTagList>

      <List>
        {searchResult.map((tag) => (
          <Tag>{tag.name}</Tag>
        ))}
      </List>

      {!searchResult && focusOn && (
        <TagList>
          {tags.map((item) => (
            <React.Fragment key={`tag_list${item.id}`}>
              {!item.checked && (
                <Tag onClick={() => onClick(item.id)}>{item.name}</Tag>
              )}
            </React.Fragment>
          ))}
        </TagList>
      )}
    </FilterBox>
  );
}

export default FilterTag;

const FilterBox = styled.div`
  width: 100;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const TagList = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  height: 60px;
  overflow-y: scroll;
  height: 90px;
`;
const Tag = styled.div`
  display: inline;
  margin: 10px;
  background-color: red;
  height: 30px;
  width: 50px;
  border-radius: 5px;
`;

const SelectedTagList = styled.div`
  display: flex;
  margin: 10px;
  width: 100;
`;

const SelectedTag = styled.div`
  border: 1px solid;
  border-radius: 5px;
`;
const List = styled.div`
  border: 1px solid;
  border-radius: 5px;
  display: flex;
`;
