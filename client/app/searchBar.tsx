import {MenuOutlined, SearchOutlined,DownOutlined} from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import Image from 'next/image'
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
const items: MenuProps['items'] = [
    {
      label: <a href="#">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="#">2nd menu item</a>,
      key: '1',
    },
    {
      label: <a href="#">3rd menu item</a>,
      key: '3',
    },
  ];
export default function SearchBar(){
    let userdata:any = [] 
    fetch('http://localhost:8080/api/user').then((res)=>res.json()).then(data=>userdata = data)
    return(
        <div className="search-bar flex items-center gap-2 p-4 w-full justify-evenly">
            <div className="search-bar-icon flex gap-8">
                <MenuOutlined style={{fontSize: '28px'}} />
                <Image
                src='/mainicon.svg'
                width={48}
                height={48}
                alt='MainIcon'
                />
            </div>

            <div className="search-bar-search w-3/4">
                <Search prefix={<SearchOutlined/>}/>
            </div>

            <div className="search-bar-profile flex gap-4 items-center">
                <div className='search-bar-profile-circleimg'>
                    <Image
                    className='rounded-full'
                    src='/userIcon.jpg'
                    width={48}
                    height={48}
                    alt='user icon'
                    />
                </div>
                <div className='search-bar-profile-username'>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        UserName
                        <DownOutlined />
                    </Space>
                    </a>
                </Dropdown>
                </div>
            </div>
        </div>
    )
}