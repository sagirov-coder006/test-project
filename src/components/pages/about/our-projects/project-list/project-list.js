import React from 'react';
import ProjectItem from '../project-item/project-item';

const ProjectList = ({items}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;
        let classNames = 'container';

        // console.log(id);
        return (
            <div className={classNames} key={id}>
                <ProjectItem
                    { ...itemProps }
                />
            </div>
        );
    });

    return (
        <div className="our-projects__content">
            { elements }
        </div>
    );
};

export default ProjectList;