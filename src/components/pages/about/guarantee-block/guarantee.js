import React from 'react';
import RightArrow from '../../../../assets/images/icons/right.png';

const Guarantee = () => {
    return(
        <div className='guarantee-block container'>
            <div className="row">
                <div className="guarantee-block__title col-xl__9 col-md__9 col-xs__5">
                    <h2>Гарантия качества <br/>строительства</h2>
                </div>
                <div className="guarantee-block__content col-xl__11 offset-xl__3 offset-md__0 col-md__9 col-xs__5">
                    <p className='guarantee-block__big-text'>Мы – авторизованные партнеры заводов-производителей: все специалисты аттестованы и регулярно проходят повышение квалификации</p>
                    <div className='guarantee-block__small-text col-md__5 col-xs__5 no-padding'>
                        <p>Наши сотрудники знают особенности всех материалов, с которыми они работают</p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="guarantee-block__button-block">
                        <a href="/" className='guarantee-block__button link-button'>
                            Наши дома
                            <img src={RightArrow} alt="right-arrow"/>
                        </a>
                        <p className="col-md__5 col-xs__5 no-padding">Помимо ГОСТов и наших внутренних стандартов, наши объекты посещают представители компаний-партнеров и контролируют соблюдение технологий строительства</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guarantee;