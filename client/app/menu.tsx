import React, { useState } from 'react';
import { AppstoreOutlined, UserOutlined, SettingOutlined, HeartOutlined,MessageOutlined, } from '@ant-design/icons';
import { Menu } from 'antd';
let link1 = '/'
let link2 = '/match'
let link3 = '/messages'
let link5 = '/info-base'
let link6 = '/settings'
function getItem(label:string, key:string, icon:string, children:string, type:string) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<a href={link1}>Главная</a>, 'strng1', <UserOutlined />),   
  getItem(<a href={link2}>Пары</a>, 'strng2', <HeartOutlined />),
  getItem(<a href={link3}>Сообщения</a> , 'strng3', <MessageOutlined />),
  getItem(<a href={link5}>База</a>, 'strng5', <AppstoreOutlined />),
  getItem(<a href={link6}>Настройки</a>, 'strng6', <SettingOutlined />),
];

// submenu keys of first level
const rootSubmenuKeys = ['strng1', 'strng2', 'strng4'];
const MenuComp = () => {
  const [openKeys, setOpenKeys] = useState(['strng1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (  
    <div className='menu-col'>
      <Menu
        mode="vertical"
        theme='dark'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
      />
    </div>
  );
};
export default MenuComp;