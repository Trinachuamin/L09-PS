import React from 'react';
import { Link, useParams } from 'react-router-dom';

const modules = {
  d1: [
    { id: 'm1', name: 'Introduction to Programming' },
    { id: 'm2', name: 'Data Structures' },
  ],
  d2: [
    { id: 'm3', name: 'UX Design' },
    { id: 'm4', name: 'Digital Marketing' },
  ],
};

const DiplomaDetails = () => {
  const { diplomaId } = useParams();
  const selectedModules = modules[diplomaId] || [];

  return (
    <div>
      <h2>Modules for Diploma {diplomaId}</h2>
      <ul>
        {selectedModules.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiplomaDetails;
