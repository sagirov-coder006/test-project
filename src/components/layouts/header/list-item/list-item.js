import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArrowDownIcon from '../../../../assets/images/icons/down.png';

export default class HeaderListItem extends Component{

    render() {
        const { label, isSecondLevel, link } = this.props;
        let classNames = 'header-nav__link underline-link__invert';
        if(isSecondLevel) {
            return <span>
                <Link to={link} className={classNames}>{label}</Link>
                <i className="arrow"><img src={ArrowDownIcon}/></i>
            </span>;
        } else {
            return <span>
                <Link to={link} className={classNames}>{label}</Link>
            </span>;
        }
    }
}
