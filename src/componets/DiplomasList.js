import React from 'react';
import { Link } from 'react-router-dom';

const diplomas = [
  { id: 'd1', name: 'Diploma in Computer Science' },
  { id: 'd2', name: 'Diploma in Digital Design' },
];

const DiplomasList = () => (
  <div>
    <h1>Diplomas</h1>
    <ul>
      {diplomas.map((diploma) => (
        <li key={diploma.id}>
          <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DiplomasList;
