import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoIosLogOut } from "react-icons/io";
import { PiChatsLight } from "react-icons/pi";
import { AiOutlineDesktop, AiOutlineProduct, AiOutlineFileDone } from "react-icons/ai";
import { SlLayers } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";

const useMenuItems = (onchange: (selectedPath: string, selectedText: string) => void) => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('Dashboard');
    const location = useLocation();

    const menuItems = useMemo(() => [
        {
            section: "Menu",
            items: [
                { Icon: AiOutlineProduct, label: "Dashboard", text: "Tổng quan", path: "/admin/dashboard" },
                { Icon: AiOutlineDesktop, label: "Device", text: "Thiết bị", path: "/admin/device" },
                { Icon: PiChatsLight, label: "Chat", text: "Dịch vụ", path: "/admin/chat" },
                { Icon: SlLayers, label: "Level", text: "Cấp số", path: "/admin/level" },
                { Icon: AiOutlineFileDone, label: "Report", text: "Báo cáo", path: "/admin/report" },
                { Icon: TbSettings2, label: "Setting", text: "Cài đặt hệ thống", path: "/admin/setting" }
            ]
        },
        {
            section: "Logout",
            items: [
                { Icon: IoIosLogOut, label: "Logout", text: "Đăng xuất", path: "/login" }
            ]
        }
    ], []);

    useEffect(() => {
        const currentPath = location.pathname;

        const menuItem = menuItems
            .flatMap(section => section.items)
            .find(item => currentPath.includes(item.path));

        if (menuItem) {
            setSelectedItem(menuItem.label);
        } else {
            setSelectedItem('Dashboard');
        }
    }, [location.pathname, menuItems]);

    const handleItemClick = async (label: string, path?: string, text?: string) => {
        setSelectedItem(label);
        if (label === 'Logout') {
            navigate('/login');
        } else if (path && text) {
            navigate(`${path}`);
            onchange(path, text);
        }
    };

    return {
        selectedItem,
        menuItems,
        handleItemClick,
    };
};

export default useMenuItems;