import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import '../index.css';

const courseModules = {
    it: [
        { id: 'c218', name: 'C218 | UI/UX Design for Apps' },
        { id: 'c346', name: 'C346 | Mobile App Development' },
    ],
    ft: [
        { id: 'c237', name: 'C237 | Software Application Development' },
        { id: 'c372', name: 'C372 | Payment Technologies' },
    ],
};

function CourseDetails() {
    const { courseId } = useParams();
    const modules = courseModules[courseId] || [];

    return (
        <div className="course-details-container">
            <h2 className="diploma-title">
                {courseId === 'it' ? 'Information Technology Diploma' : 'Financial Technology Diploma'}
            </h2>
            <div className="diploma-modules">
                {modules.map((module) => (
                    <Link key={module.id} to={`${module.id}`} className="module-card">
                        {module.name}
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default CourseDetails;
