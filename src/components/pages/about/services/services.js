import React, {Component} from 'react';
import ServicesList from './services-list/services-list';
import Service1 from '../../../../assets/images/about-company/services/service-1.jpg';
import Service2 from '../../../../assets/images/about-company/services/service-2.jpg';
import Service3 from '../../../../assets/images/about-company/services/service-3.jpg';
import Service4 from '../../../../assets/images/about-company/services/service-4.jpg';
import Service5 from '../../../../assets/images/about-company/services/service-5.jpg';
import Service6 from '../../../../assets/images/about-company/services/service-6.jpg';
import Service7 from '../../../../assets/images/about-company/services/service-7.jpg';


export default class ServicesPage extends Component {

    constructor() {
        super();

        this.state = {
            services: [
                this.createService(
                    'Строительство домов',
                    'построим надежный дом из материала на ваш выбор: кирпич, газоблок, дерево',
                    [
                        this.createItem(
                        'Дома из кирпича',
                        '42 000',
                        '/',
                        Service1),
                        this.createItem(
                            'Дома из газоблока',
                            '40 000',
                            '/',
                            Service2),
                        this.createItem(
                            'Дома из дерева',
                            '38 000',
                            '/',
                            Service3)
                    ]
                ),
                this.createService(
                    'Проектирование',
                    'сделаем проект полностью по вашим пожеланиям',
                    [
                        this.createItem(
                        'Дома из кирпича',
                        '42 000',
                        '/',
                        Service4)
                    ]
                ),
                this.createService(
                    'дополнительные услуги',
                    'полностью выполняем дизайн-проект: от проектирования до реализации',
                    [
                        this.createItem(
                            'Дизайн интерьера',
                            '42 000',
                            '/',
                            Service5),
                        this.createItem(
                            'Дизайн экстерьера',
                            '42 000',
                            '/',
                            Service6),
                        this.createItem(
                            'Ландшафтный дизайн',
                            '42 000',
                            '/',
                            Service7)
                    ]
                )
            ]
        };
    }
    startItem = 0;
    startId = 0;

    createItem = (name, price, link, image) => {
        return {
            name,
            price,
            link,
            image,
            id: this.startItem++
        }
    };

    createService = (name, text, items) => {
        return {
            name,
            text,
            items,
            id: this.startId++
        }
    };


    render(){
        const {services} = this.state;
        return(
            <div className="services">
                <div className="container">
                    <div className="services__title">
                        <h2>Все наши <br/>услуги</h2>
                    </div>
                </div>
                <ServicesList items={services}/>
            </div>
        );
    }
};

