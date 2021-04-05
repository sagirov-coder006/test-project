import React from 'react';
import LogoSagirov from '../../../assets/images/icons/logo-sagirov.png';
import YoutubeIcon from '../../../assets/images/icons/youtube.png';
import InstagramIcon from '../../../assets/images/icons/instagram.png';
import FacebookIcon from '../../../assets/images/icons/facebook.png';
import VkIcon from '../../../assets/images/icons/vk.png';


const contactsPrimary = [
    {
        href: "tel:84872718484",
        itemProp: "telephone",
        label: "8 (4872) 71 84 84",
    },
    {
        href: "mailto:info@doma-veka.ru",
        itemProp: "email",
        label: "info@doma-veka.ru",
    },
];

const iconsLink = [
    {
        href: "/",
        icon: YoutubeIcon,
        alt: 'youtube'
    },
    {
        href: "/",
        icon: FacebookIcon,
        alt: 'facebook'
    },
    {
        href: "/",
        icon: InstagramIcon,
        alt: 'instagram'
    },
    {
        href: "/",
        icon: VkIcon,
        alt: 'vk'
    }
];

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__top-part row block-underline" itemScope itemType="http://schema.org/Organization">
                    <div className="footer__contacts-primary col-xl__7 col-md__4 col-sm__4 col-xs__5">
                        <div className="footer__block-label">
                            Контакты для связи:
                        </div>
                        <div className="footer__contacts-value">
                            {contactsPrimary.map((contact) => (
                                <a href={contact.href}
                                   itemProp={contact.itemProp}
                                   className="contact__content footer__value underline-link__invert"
                                >
                                    <span className="span">{contact.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer__socials col-xl__5 col-md__4 col-sm__4 col-xs__5">
                        <div className="footer__block-label">Соцсети:</div>
                        <div className="footer__socials-block">
                            {iconsLink.map((social) => (
                                <a href={social.href}
                                   className="contact__content"
                                >
                                    <img src={social.icon} alt={social.alt}/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer__adress col-xl__6 col-md__5 col-sm__5 col-xs__5">
                        <div className="footer__block-label">работаем:</div>
                        <div className="footer__value ">
                            <span><span itemProp="addressLocality">Тула</span>,  <span itemProp="streetAddress">Веневское шоссе, 31б <span className="no-wrap">2 этаж  офис 1</span></span></span>
                        </div>
                    </div>
                    <div className="footer__working-hours col-xl__5 col-md__5 col-sm__5 col-xs__5">
                        <div className="footer__working-day" itemProp="openingHours">
                            <div className="footer__days footer__value">пн-пт</div>
                            <div className="footer__time footer__value">
                                9:00 – 18:00
                                <div>после 18:00 – по предварительной записи</div>
                            </div>
                        </div>
                        <div className="footer__working-day">
                            <div className="footer__days footer__value">сб-вс</div>
                            <div className="footer__time footer__value">по предварительной записи</div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom-part row">
                    <div className="footer__copyright col-xl__7 col-md__4 col-xs__5">
                        doma-veka.ru©2020
                    </div>
                    <div className="footer__confidential col-xl__8 col-md__3 col-xs__5">
                        <a className="footer__confidential-link underline-link" href="/">Потилика конфиденциальности</a>
                    </div>
                    <div className="footer__sagirov col-xl__8 col-md__2 col-xs__5">
                        <a href="https://sagirov.com">
                            <span className='made-in'>Made in</span>
                            <img src={LogoSagirov} alt="Sagirov"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;