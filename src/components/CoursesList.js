import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../index.css';

const diplomas = [
    { id: 'it', name: 'Information Technology' },
    { id: 'ft', name: 'Financial Technology' },
];

function CoursesList() {
    return (
        <div className="content-container">
            <div className="courses-list-container">
                <h2 className="schools-title">Schools</h2>
                <div className="schools-links">
                    {diplomas.map((diploma) => (
                        <Link key={diploma.id} to={`/courses/${diploma.id}`} className="school-link">
                            {diploma.name}
                        </Link>
                    ))}
                </div>
                <p className="select-diploma">Select a diploma from above</p>
                <Outlet />
            </div>
            <footer>
                ©2024 | <a href="https://www.rp.edu.sg" target="_blank" rel="noopener noreferrer">Republic Polytechnic</a>
            </footer>
        </div>
    );
}

export default CoursesList;
