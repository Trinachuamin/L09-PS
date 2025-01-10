import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const moduleDetails = {
    c218: {
        name: 'UI/UX Design for Apps',
        description:
            'Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.',
        lecturer: 'Azhar Kamar',
    },
    c346: {
        name: 'Mobile App Development',
        description:
            'In this module, students will learn the basics of creating Android Applications.',
        lecturer: 'Derek Lee',
    },
    c237: {
        name: 'Software Application Development',
        description:
            'This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.',
        lecturer: 'Hannah Lim',
    },
    c372: {
        name: 'Payment Technologies',
        description:
            'This module introduces students to different payment technologies and systems.',
        lecturer: 'Magdalene Lim',
    },
};

function ModuleDetails() {
    const { moduleId } = useParams();
    const module = moduleDetails[moduleId];

    return (
        <div className="module-details-container">
            <h2 className="module-title">Module</h2>
            <h3 className="module-name">{module.name}</h3>
            <p className="module-description">{module.description}</p>
            <div className="module-lecturer-details">
                <p className="module-lecturer"><strong>{module.lecturer}</strong></p>
                <p className="lecturer-label">Lecturer</p>
            </div>
        </div>
    );
}

export default ModuleDetails;
