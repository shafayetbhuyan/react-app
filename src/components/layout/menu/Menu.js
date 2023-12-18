import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { sideMenu } from '../../../config/menu/MenuConfig';
import style from './Menu.module.css';

function Menu() {
    const [subMenuVisible, setSubMenuVisible] = useState({});
    const [activeItem, setActiveItem] = useState({});

    const resolveLinkPath = (childTo, parentTo) => `${parentTo}${childTo}`;
    const resolveKey = (childKey, parentKey) => `${parentKey}_${childKey}`;

    const toggleSubMenu = (item, key) => {
        // const key = depth + '' + index;
        // console.log(key);
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

    const renderMenu = (items, parentPath, parentKey) => {

        // console.log(items, parentPath, parentKey);

        return (
            <ul>
                {items.map((item, index) => {
                    const currentPath = resolveLinkPath(item.to, parentPath);
                    const key = `${item.depth}${index}`;
                    const currentKey = resolveKey(key, parentKey);
                    return (
                        <li key={currentKey}>
                            <NavLink
                                exact
                                to={currentPath}
                                className={`${style.navItem} ${item.depth !== 1 ? style.subMenu : ''} ${item.menu ? style.hasSubMenu : ''} ${activeItem[currentKey] ? `${style.activeItem}` : `${style.inActiveItem}`}`}
                                onClick={() => toggleSubMenu(item, currentKey)}
                            >
                                <FontAwesomeIcon icon={item.icon} className={style.navIcon} />
                                <span className={style.navLabel}>{item.label}</span>
                                {
                                    item.menu &&
                                    (
                                        <ChevronDownIcon className={`${style.navItemHeaderChevron} ${subMenuVisible[currentKey] && style.chevronExpanded}`} />
                                    )
                                }

                            </NavLink>

                            {subMenuVisible[currentKey] && item.menu && renderMenu(item.menu, currentPath, currentKey)}

                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div>
            <div className={style.mainMenu}>{renderMenu(sideMenu, '', '')}</div>
        </div>
    );
}

export default Menu;
