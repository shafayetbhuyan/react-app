import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { sideMenu } from '../../config/menu/MenuConfig';
import style from './Menu.module.css';

function Menu() {
    const [subMenuVisible, setSubMenuVisible] = useState({});
    const [activeItem, setActiveItem] = useState({});

    const resolveLinkPath = (childTo, parentTo) => `${parentTo}${childTo}`;

    const toggleSubMenu = (item, index, depth) => {
        const key = depth + '' + index;
        if (item.menu) {
            setSubMenuVisible({
                ...subMenuVisible,
                [key]: !subMenuVisible[key],
            });
        }
        setActiveItem({
            ...activeItem,
            [key]: !activeItem[key],
        });
    };

    const renderMenu = (items, parentPath) => {
        return (
            <ul>
                {items.map((item, index) => {
                    const currentPath = resolveLinkPath(item.to, parentPath);
                    return (
                        <li key={`${item.depth}${index}`}>
                            <NavLink
                                exact
                                to={currentPath}
                                className={`${style.navItem} ${item.depth !== 1 ? style.subMenu : ''} ${item.menu ? style.hasSubMenu : ''} ${activeItem[`${item.depth}${index}`] ? `${style.activeItem}` : `${style.inActiveItem}`}`}
                                onClick={() => toggleSubMenu(item, index, item.depth)}
                            >
                                <FontAwesomeIcon icon={item.icon} className={style.navIcon} />
                                <span className={style.navLabel}>{item.label}</span>
                                {
                                    item.menu &&
                                    (
                                        <ChevronDownIcon className={`${style.navItemHeaderChevron} ${subMenuVisible[`${item.depth}${index}`] && style.chevronExpanded}`} />
                                    )
                                }

                            </NavLink>

                            {subMenuVisible[`${item.depth}${index}`] && item.menu && renderMenu(item.menu, currentPath)}

                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div>
            <div className={style.mainMenu}>{renderMenu(sideMenu, '')}</div>
        </div>
    );
}

export default Menu;
