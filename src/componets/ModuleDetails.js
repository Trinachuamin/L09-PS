import React from 'react';
import { useParams } from 'react-router-dom';

const moduleDetails = {
  m1: 'Learn the basics of programming.',
  m2: 'Explore data structures in-depth.',
  m3: 'Understand user experience design principles.',
  m4: 'Master digital marketing strategies.',
};

const ModuleDetails = () => {
  const { moduleId } = useParams();
  return <div><h3>Module Details</h3><p>{moduleDetails[moduleId]}</p></div>;
};

export default ModuleDetails;
