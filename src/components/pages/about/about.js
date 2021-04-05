import React from 'react';
import AboutListBlock from './about-list/about-list';
import Guarantee from './guarantee-block/guarantee';
import Certificates from './certificates/certificates';
import OurProjects from './our-projects/our-projects';
import ServicesPage from './services/services';


const AboutPage = () => {
    return (
        <>
            <div className="container">
                <h1>О компании</h1>
            </div>
            <AboutListBlock/>
            <Guarantee/>
            <Certificates/>
            <OurProjects/>
            <ServicesPage/>
        </>
    );
};

export default AboutPage;
