import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <Menu.Item key="mail">
      <a href="/boutiques">Boutiques</a>
    </Menu.Item> */}
    <SubMenu title={<a href="/boutiques">Boutiques</a>}>
      
        <Menu.Item key="add"><a href="/boutique/add">Add Boutique</a></Menu.Item>
        <Menu.Item key="table"><a href="/table/">Table</a></Menu.Item>
      
      {/* <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup> */}
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu