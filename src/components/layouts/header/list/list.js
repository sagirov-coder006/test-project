import React from 'react';
import HeaderListItem from '../list-item/list-item';

const HeaderList = ({items}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li className="header-nav__item" key={id}>
                <HeaderListItem
                    { ...itemProps }
                />
            </li>
        );
    });

    return (
        <ul className="header-nav__list nav__list list">
            { elements }
        </ul>
    );
};

export default HeaderList;