import './Menu.css';
import Logo from '../logo/Logo';
import useMenuItems from '../../hooks/useMenuItems';

interface MenuProps {
    onchange: (selectedItem: JSX.Element, selectedText: string) => void;
}

function Menu({ onchange }: MenuProps) {
    const { selectedItem, menuItems, handleItemClick } = useMenuItems(onchange);

    return (
        <div className='menu-body flex-columm'>
            <div className='menu-logo flex-center'>
                <Logo width={80} height={80} />
            </div>

            {menuItems.map((menuSection) => (
                <div className={`menu-menu ${menuSection.section === 'Logout' ? 'menu-setting flex-center' : ''}`} key={menuSection.section}>
                    <div>
                        {menuSection.items.map(({ Icon, label, text, element }) => (
                            <div
                                className={`menu-detail flex-row-align-center ${selectedItem === label ? 'selected' : ''}`}
                                onClick={() => handleItemClick(label, element, text)}
                                key={label}
                            >
                                <Icon size={22} />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Menu;
