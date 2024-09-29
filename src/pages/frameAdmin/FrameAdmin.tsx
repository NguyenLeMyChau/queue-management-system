import './FrameAdmin.css';
import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';
import { Outlet } from 'react-router-dom';

const FrameAdmin = () => {
    const { breadcrumbs } = useBreadcrumbs();

    const handleMenuChange = (selectedPath: string, selectedText: string) => {
        console.log('selectedPath: ', selectedPath);
        console.log('selectedText: ', selectedText);
    };


    return (
        <div className='frame-container flex-row-align-start'>
            <Menu onchange={handleMenuChange} />
            <div className='frame-content flex-columm'>
                <header className='frame-header'>
                    <Header selectedMenuText={breadcrumbs} />
                </header>

                <main className='main-content'>
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default FrameAdmin;
