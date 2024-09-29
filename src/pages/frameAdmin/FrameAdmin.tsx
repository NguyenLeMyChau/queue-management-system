import { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import './FrameAdmin.css';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';

const FrameAdmin = () => {
    const [currentContent, setCurrentContent] = useState<JSX.Element>(<Dashboard />);
    const { breadcrumbs, setBreadcrumbs } = useBreadcrumbs();

    const handleMenuChange = (selectedItem: JSX.Element, selectedText: string) => {
        console.log('selectedText: ', selectedText);
        setCurrentContent(selectedItem);
        setBreadcrumbs([selectedText]);
    };


    return (
        <div className='frame-container flex-row-align-start'>
            <Menu onchange={handleMenuChange} />
            <div className='frame-content flex-columm'>
                <header className='frame-header'>
                    <Header selectedMenuText={breadcrumbs} />
                </header>

                <main className='main-content'>
                    {currentContent}
                </main>

            </div>
        </div>
    );
};

export default FrameAdmin;
