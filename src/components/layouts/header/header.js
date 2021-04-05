import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LogoSign from '../../../assets/images/logos/logo-sign.png';
import LogoText from '../../../assets/images/logos/logo-text.png';
import HeaderList from './list/list';

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            headerMenuData: [
                this.createListItem('Проекты', false,'/confidential'),
                this.createListItem('Наши работы', false,'/confidential'),
                this.createListItem('Услуги', true,'/confidential'),
                this.createListItem('Цены', false, '/confidential'),
                this.createListItem('О нас', false, '/confidential'),
                this.createListItem('Контакты', false, '/confidential')
            ]
        };
    }

    startId = 0;

    createListItem = (label, isSecondLevel, link) => {
        return {
            label,
            isSecondLevel,
            link,
            id: this.startId++
        }
    };

    render(){
        const {headerMenuData} = this.state;
        return (
            <header className='header'>
                <div className="container">
                    <div className="row">
                        <div className="logo col-xl__4 col-md__3 col-xs__2 col-xxs__1">
                            <Link className="logo__link" to='/'>
                                <img className="logo__sign" src={LogoSign} alt="header-logo-left-part"/>
                                <img className="logo__text" src={LogoText} alt="header-logo-right-part"/>
                            </Link>
                        </div>
                        <nav className="header-nav nav col-xl__13">
                            <HeaderList items={headerMenuData}/>
                        </nav>
                        <div className="header-contacts c col-xl__6 col-md__5 offset-md__1 col-xs__3 offset-xs__0 col-xxs__4">
                            <div className="header-contacts__phone">
                                <a className="header-contacts__link underline-link__invert" href="tel:84872718484">8 (4872) 71 84 84</a></div>
                            <div className="hamburger">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__border-bottom"></div>
                </div>
            </header>
        );
    };
}

