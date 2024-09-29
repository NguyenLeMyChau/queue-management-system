import './Header.css';
import avatar from '../../assets/avatar.png';
import { FaAngleRight, FaBell } from "react-icons/fa";
import { breadcrumbPaths, useBreadcrumbs } from '../../hooks/useBreadcrumbs';
import { Link } from 'react-router-dom';

export default function Header() {
    const { breadcrumbs } = useBreadcrumbs();
    const currentPaths = breadcrumbPaths[window.location.pathname] || [];

    return (
        <div className='flex-row-space-between'>
            <div className='flex-row-align-center'>
                <h3>
                    {breadcrumbs.length > 0 ? (
                        breadcrumbs.map((item, index) => {
                            const currentPath = currentPaths[index] || '#';
                            return (
                                <span key={index} className='breadcrumb-item'>
                                    {index === 0 || index === breadcrumbs.length - 1 ? (
                                        <span className={index === breadcrumbs.length - 1 ? 'breadcrumb-active' : ''}>{item}</span>
                                    ) : (
                                        <Link to={currentPath} className='breadcrumb-link'>
                                            {item}
                                        </Link>
                                    )}
                                    {index < breadcrumbs.length - 1 && (
                                        <FaAngleRight className='breadcrumb-icon' size={15} />
                                    )}
                                </span>
                            );
                        })
                    ) : (
                        <span className='breadcrumb-item'>No breadcrumbs available</span>
                    )}
                </h3>
            </div>

            <div className='flex-row-align-center'>
                <div className='header-bell flex-center'>
                    <FaBell className='bell-icon' />
                </div>
                <img src={avatar} alt='Avatar' className='header-avatar' />
                <div className='flex-columm'>
                    <span className='header-greeting'>Xin chào</span>
                    <span className='header-username'>Nguyễn Lê Mỹ Châu</span>
                </div>
            </div>
        </div>
    );
}