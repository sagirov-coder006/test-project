import React, {Component} from 'react';
import RightArrow from '../../../../../assets/images/icons/right.png';

export default class CertificateItem extends Component{

    render() {
        const {name, country, logo, image, status, text, link, id} = this.props;
        return (
            <div className='certificate__content'>
                <div className="certificate__row certificate__name-block">
                    <div className="certificate__item-name col-cert-xl__7 col-md__6 col-cert-xs__3">
                        <div className="certificate__name">{name}</div>
                        <div className="certificate__country">{country}</div>
                    </div>
                    <div className="certificate__logo col-cert-xl__4 col-md__3 col-cert-xs__2"><img src={logo} alt={name}/></div>
                </div>
                <div className="certificate__row">
                    <div className="certificate__image col-xl__23 col-xs__5">
                        <img src={image} alt='certificate'/>
                    </div>
                    <div className="certificate__status offset-cert-xl__1 col-cert-xl__6 col-md__5 col-cert-xs__5 offset-xs__0">{status}</div>
                    <div className="certificate__more col-cert-xl__4 col-md__3 col-cert-xs__5">
                        <a className='link-button no-border' href={link}>Подробнее <img src={RightArrow} alt="right-arrow"/></a>
                    </div>
                    <div className="certificate__text col-cert-xl__7 col-md__6 col-cert-xs__5">{text}</div>

                </div>
            </div>
        );
    };
}
