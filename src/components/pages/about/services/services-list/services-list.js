import React from 'react';
import ServicesItem from '../services-item/services-item';

const ServicesList = ({items}) => {

    const elements = items.map((item) => {
        const {id, name, text, ...itemProps} = item;
        let classNames = '';

        console.log(name);
        return (
            <div className='service-list container' key={id}>
                <div className="service-list__row row">
                    <div className="service-list__text col-xl__4 col-md__5  col-xs__5">
                        {text}
                    </div>
                    <div className="service-list__title col-xl__16 offset-xl__3 offset-md__0 col-md__4 col-xs__5">
                        <h3>{name}</h3>
                    </div>
                    <div className="service-list__items offset-xl__12 col-xl__8 offset-md__0 col-md__9 col-xs__5">
                        <ServicesItem
                            { ...itemProps }
                        />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="services-list__content">
            { elements }
        </div>
    );
};

export default ServicesList;