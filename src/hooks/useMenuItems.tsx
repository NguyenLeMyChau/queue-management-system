import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoIosLogOut } from "react-icons/io";
import { PiChatsLight } from "react-icons/pi";
import { AiOutlineDesktop, AiOutlineProduct, AiOutlineFileDone } from "react-icons/ai";
import { SlLayers } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";
import Dashboard from '../pages/dashboard/Dashboard';
import Device from '../pages/device/Device';
import Chat from '../pages/chat/Chat';
import Level from '../pages/level/Level';
import Report from '../pages/report/Report';

const useMenuItems = (onchange: (selectedItem: JSX.Element, selectedText: string) => void) => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = async (label: string, element?: JSX.Element, text?: string) => {
        setSelectedItem(label);
        if (label === 'Logout') {
            try {
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        } else if (element && text) {
            onchange(element, text);
        }
    };

    const menuItems = [
        {
            section: "Menu",
            items: [
                { Icon: AiOutlineProduct, label: "Dashboard", text: "Tổng quan", element: <Dashboard /> },
                { Icon: AiOutlineDesktop, label: "Device", text: "Thiết bị", element: <Device /> },
                { Icon: PiChatsLight, label: "Chat", text: "Dịch vụ", element: <Chat /> },
                { Icon: SlLayers, label: "Level", text: "Cấp số", element: <Level /> },
                { Icon: AiOutlineFileDone, label: "Report", text: "Báo cáo", element: <Report /> },
                { Icon: TbSettings2, label: "Setting", text: "Cài đặt hệ thống" },
            ],
        },
        {
            section: "Logout",
            items: [
                { Icon: IoIosLogOut, label: "Logout", text: "Đăng xuất" }
            ]
        }
    ];

    return {
        selectedItem,
        menuItems,
        handleItemClick,
    };
};

export default useMenuItems;
