import React from 'react';
import AboutImage from '../../../../assets/images/about-company/about.jpg';

const AboutListBlock = () => {
    return(
        <div className="about-list about-list-block">
            <div className="container">
                <div className="about-list-block__title row">
                    <div className="col-xl__16 offset-xl__7 col-md__5 offset-md__4 offset-xs__0 col-xs__5">
                        ваша мечта – наша работа
                    </div>
                </div>
                <div className="row about-list-block__content row">
                    <div className="about-list-block__content-titles col-xl__7 col-md__4 col-xs__5">
                        <div>
                            строим <br />
                            по ГОСТам и СНИПам</div>
                        <div>
                            гарантия <br />
                            на все работы
                        </div>
                    </div>
                    <div className="about-list-block__content-list col-xl__8 col-md__5 col-xs__5">
                        <ul>
                            <li>Можем выполнить все работы по постройке дома: от проектирования, до облагораживания участка.</li>
                            <li>Заказав дом у нас, вы экономите, так как наши конструктивные решения высокоэффективны.</li>
                        </ul>
                    </div>
                    <div className="about-list-block__content-list col-xl__8 col-md__5 offset-md__4 offset-xs__0 col-xs__5">
                        <ul>
                            <li>Можем выполнить все работы по постройке дома: от проектирования, до облагораживания участка.</li>
                            <li>Заказав дом у нас, вы экономите, так как наши конструктивные решения высокоэффективны.</li>
                        </ul>
                    </div>
                    <div className="about-list-block__image col-xl__23 col-xs__5">
                        <div className="about-list-block__project-link">
                            <a href="/" className='underline-link'>посмотреть проект №13-12-20</a>
                        </div>
                        <img src={AboutImage} alt="about-image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutListBlock;