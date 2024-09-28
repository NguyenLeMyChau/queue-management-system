import './Header.css';
import avatar from '../../assets/avatar.png';
import { FaBell } from "react-icons/fa";

interface HeaderProps {
    selectedMenuText: string;
}

export default function Header({ selectedMenuText }: HeaderProps) {
    return (
        <div className='flex-row-space-between'>
            <div className='flex-row-align-center'>
                <h3>{selectedMenuText}</h3>
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