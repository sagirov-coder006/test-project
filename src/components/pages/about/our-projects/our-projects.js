import React, {Component} from 'react';
import ProjectList from './project-list/project-list';
import Project1 from '../../../../assets/images/about-company/projects/project-1.jpg';
import Project2 from '../../../../assets/images/about-company/projects/project-2.jpg';
import House1 from '../../../../assets/images/about-company/projects/house-1.jpg';
import House2 from '../../../../assets/images/about-company/projects/house-2.jpg';
import RightArrowIcon from '../../../../assets/images/icons/right.png';


export default class OurProjects extends Component {

    constructor() {
        super();

        this.state = {
            projects: [
                this.createItem(
                    this.startNum++,
                    'Дом в пос. щепкин',
                    250,
                    2014,
                    House1,
                    '№12-56-88',
                    '2 спальни',
                    Project1,
                    '/',
                    '/'
                    ),
                this.createItem(
                    this.startNum++,
                    'Дом в пос. щепкин',
                    250,
                    2014,
                    House2,
                    '№12-56-86',
                    '2 спальни',
                    Project2,
                    '/',
                    '/'
                    )
            ]
        };
    }
    startNum = 0;
    startId = 0;
    createItem = (num, houseName, square, year, houseImage, projectNumber, rooms, projectImage, houseLink, projectLink) => {
        return {
            num,
            houseName,
            square,
            year,
            houseImage,
            projectNumber,
            rooms,
            projectImage,
            houseLink,
            projectLink,
            id: this.startId++
        }
    };


    render(){
        const {projects} = this.state;
        return(
            <div className="our-projects">
                <div className="container">
                    <div className="row our-projects__title-line">
                        <h2 className='col-xl__7 col-md__9 col-xs__5'>Наши проекты</h2>
                        <div className="our-projects__subtitle col-xl__9 col-md_9 col-xs__5">
                            спроектировали более 250 проектов <br/>построили по ним более 500 домов.
                        </div>
                        <div className="our-projects__buttons col-xl__7 col-md__9 col-xs__5">
                            <a className="link-button go-to-houses" href='/'>Все дома <img src={RightArrowIcon}/></a>
                            <a className="link-button" href='/'>Все проекты <img src={RightArrowIcon}/></a>
                        </div>
                    </div>
                </div>

                <ProjectList items={projects}/>
            </div>
        );
    }
};

