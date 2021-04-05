import React from 'react';
import CertificateItem from '../item/item';

const CertificateBlock = ({items}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;
        let classNames = '';
        let temp = id;
        if((temp%2) == 0){
             classNames = 'certificate__item col-xl__11 col-md__9 col-xs__5'
        } else {
            classNames = 'certificate__item col-xl__11 offset-xl__1 col-md__9 offset-md__0 col-xs__5'
        }

        return (
            <div className={classNames} key={id}>
                <CertificateItem
                    { ...itemProps }
                />
            </div>
        );
    });

    return (
        <div className="certificate__block row">
            { elements }
        </div>
    );
};

export default CertificateBlock;