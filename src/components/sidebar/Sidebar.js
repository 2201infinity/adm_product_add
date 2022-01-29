import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import theme from 'styles/theme';

const MENULISTS = [
  '기본 설정',
  '회원',
  '진열',
  '상품',
  '주문',
  '배송',
  '프로모션',
  '혜택',
  '고객 센터 관리',
  '알림',
];

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>설로인</Logo>
      <ul>
        {MENULISTS.map((menu) => (
          <React.Fragment key={menu}>
            <MenuList>
              {menu}
              <ArrowDown />
            </MenuList>
            {menu === '상품' && (
              <>
                <InnerMenuList>상품 리스트</InnerMenuList>
                <InnerMenuList>상품 재고 관리</InnerMenuList>
                <AddProductMenu>상품 등록</AddProductMenu>
              </>
            )}
          </React.Fragment>
        ))}
      </ul>
    </SidebarContainer>
  );
}

const Logo = styled.h2`
  font-size: 20px;
  padding: 12px 14px;
  border-bottom: 1.5px solid ${theme.colors.lightPurple};
`;

const SidebarContainer = styled.aside`
  min-width: 150px;
  border-right: 1.5px solid ${theme.colors.lightPurple};
  font-weight: 600;
  font-size: 14px;
`;

const MenuList = styled.li`
  padding: 12px 14px;
  border-bottom: 1.5px solid ${theme.colors.lightPurple};
`;

const InnerMenuList = styled.li`
  padding: 12px 14px;
  background-color: ${theme.colors.lightPurple};
`;

const AddProductMenu = styled.li`
  padding: 12px 14px;
  background-color: #d6d5e2;
  color: #352f6e;
`;

const ArrowDown = styled(MdKeyboardArrowDown)`
  float: right;
`;

export default Sidebar;
