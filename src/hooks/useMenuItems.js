import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoIosLogOut } from "react-icons/io";
import { PiChatsLight } from "react-icons/pi";
import { AiOutlineDesktop, AiOutlineProduct, AiOutlineFileDone } from "react-icons/ai";
import { SlLayers } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";
import Dashboard from '../pages/dashboard/Dashboard';

const useMenuItems = (onchange) => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = async (label, element, text) => {
        setSelectedItem(label);
        if (label === 'Logout') {
            try {
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        } else {
            onchange(element, text);
        }
    }

    const menuItems = [
        {
            section: "Menu",
            items: [
                { Icon: AiOutlineProduct, label: "Dashboard", text: "Tổng quan", element: <Dashboard /> },
                { Icon: AiOutlineDesktop, label: "Device", text: "Thiết bị" },
                { Icon: PiChatsLight, label: "Chat", text: "Dịch vụ" },
                { Icon: SlLayers, label: "Level", text: "Cấp số" },
                { Icon: AiOutlineFileDone, label: "Report", text: "Báo cáo" },
                { Icon: TbSettings2, label: "Setting", text: "Cài đặt hệ thống" },
            ],
        },
        {
            section: "Logout",
            items: [
                { Icon: IoIosLogOut, label: "Logout", text: "Đăng xuất" }
            ]
        }
    ]

    return {
        selectedItem,
        menuItems,
        handleItemClick,
    };
};

export default useMenuItems;