import React from 'react';
import RichtIcon from "../../../../../assets/images/icons/right.png";

const ServiceItem = ({items}) => {

    const elements = items.map((item) => {
        const {id, name, price, link, image} = item;
        let classNames = '';

        return (
            <div className='service-list__item' key={id}>
                <div className="service-list__item-title">
                    <div className="service-item__name-block">
                        <div className="service-item__name">{name}</div>
                        <div className="service-item__price">стоимость от <span>{price} ₽/м</span></div>
                    </div>
                    <div className="service-item__link">
                        <a href={link} className="link-button no-border">Подробнее <img src={RichtIcon} /></a>
                    </div>
                </div>
                <div className="service-list__item-image">
                    <img src={image} alt={name}/>
                </div>
            </div>
        );
    });



    return (
        <div className="service-items__content">
            { elements }
        </div>
    );
};

export default ServiceItem;