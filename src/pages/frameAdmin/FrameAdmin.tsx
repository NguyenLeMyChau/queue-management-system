import { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import './FrameAdmin.css';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';

const FrameAdmin = () => {
    const [currentContent, setCurrentContent] = useState<JSX.Element>(<Dashboard />);
    const [selectedMenuText, setSelectedMenuText] = useState<string>('Tổng quan');

    const handleMenuChange = (selectedItem: JSX.Element, selectedText: string) => {
        setCurrentContent(selectedItem);
        setSelectedMenuText(selectedText);
    };

    return (
        <div className='frame-container flex-row-align-start'>
            <Menu onchange={handleMenuChange} />
            <div className='frame-content flex-columm'>
                <header className='frame-header'>
                    <Header selectedMenuText={selectedMenuText} />
                </header>

                <main className='main-content'>
                    {currentContent}
                </main>

            </div>
        </div>
    );
};

export default FrameAdmin;
