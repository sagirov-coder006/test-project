import React, {Component} from 'react';
import RightArrow from '../../../../../assets/images/icons/arrow.png';

export default class ProjectItem extends Component{

    render() {
        const {num, houseName, square, year, houseImage, projectNumber, rooms, projectImage, houseLink, projectLink, id} = this.props;

        if(num%2 == 0){
            return (
                <div className='our-projects__item row'>
                    <div className="our-projects__project-block project large col-xl__16 col-md__5 col-xs__5">
                        <div className="project__name">
                            <a href={houseLink} className='arrow-link'>{houseName} <img src={RightArrow}/></a>
                        </div>
                        <div className="project__info">
                            <div className="project__square">
                                {square} м<sup>2</sup>
                            </div>
                            <div className="project__rooms">
                                {year}
                            </div>
                        </div>
                        <div className="project__image">
                            <img src={houseImage} alt={houseName}/>
                        </div>
                    </div>
                    <div className="our-projects__project-block project small col-xl__7 col-md__4 col-xs__5">
                        <div className="project__name">
                            <span className='mobile-title'>построен <br/>по проекту:</span>
                            <a href={projectLink} className='arrow-link'>{projectNumber} <img src={RightArrow}/></a>
                        </div>
                        <div className="project__info">
                            <div className="project__square">
                                {square} м<sup>2</sup>
                            </div>
                            <div className="project__rooms">
                                {rooms}
                            </div>
                        </div>
                        <div className="project__image">
                            <img src={projectImage} alt={projectNumber}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='our-projects__item row reverse'>
                    <div className="our-projects__project-block project small col-xl__7 col-md__4 col-xs__5">
                        <div className="project__name">
                            <span className='mobile-title'>построен <br/>по проекту:</span>
                            <a href={projectLink} className='arrow-link'>{projectNumber} <img src={RightArrow}/></a>
                        </div>
                        <div className="project__info">
                            <div className="project__square">
                                {square} м<sup>2</sup>
                            </div>
                            <div className="project__rooms">
                                {rooms}
                            </div>
                        </div>
                        <div className="project__image">
                            <img src={projectImage} alt={projectNumber}/>
                        </div>
                    </div>
                    <div className="our-projects__project-block large project col-xl__16 col-md__5 col-xs__5">
                        <div className="project__name">
                            <a href={houseLink} className='arrow-link'>{houseName} <img src={RightArrow}/></a>
                        </div>
                        <div className="project__info">
                            <div className="project__square">
                                {square} м<sup>2</sup>
                            </div>
                            <div className="project__rooms">
                                {year}
                            </div>
                        </div>
                        <div className="project__image">
                            <img src={houseImage} alt={houseName}/>
                        </div>
                    </div>
                </div>
            );
        }

    };
}
