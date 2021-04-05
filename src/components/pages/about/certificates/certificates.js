import React, {Component} from 'react';
import CertificateBlock from './block/block';
import WienerbergerLogo from '../../../../assets/images/logos/certificates/wienerberger.png';
import YtongLogo from '../../../../assets/images/logos/certificates/ytong.png';
import WienerbergerCertificate from '../../../../assets/images/about-company/certificates/certificate-1.jpg';
import YtongCertificate from '../../../../assets/images/about-company/certificates/certificate-2.jpg';


export default class Certificates extends Component {

    constructor() {
        super();

        this.state = {
            certificatesData: [
                this.createItem(
                    'Wienerberger',
                    'Австрия', WienerbergerLogo,
                    WienerbergerCertificate,
                    'Сертифицированный партнер Wienerberger',
                    'гарантия качества строительства из керамических блоков Porotherm',
                    '/'),
                this.createItem(
                    'Ytong',
                    'Россия',
                    YtongLogo,
                    YtongCertificate,
                    'Сертифицированный партнер Ytong',
                    'гарантия качества строительства из керамических блоков Porotherm',
                    '/')
            ]
        };
    }
    startId = 0;

    createItem = (name, country, logo, image, status, text, link) => {
        return {
            name,
            country,
            logo,
            image,
            status,
            text,
            link,
            id: this.startId++
        }
    };


    render(){
        const {certificatesData} = this.state;
        return(
            <div className="certificate container">
                <CertificateBlock items={certificatesData}/>
            </div>
        );
    }
};

