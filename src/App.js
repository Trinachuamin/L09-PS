import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiplomasList from './components/DiplomasList';
import DiplomaDetails from './components/DiplomaDetails';
import ModuleDetails from './components/ModuleDetails';
import RegistrationForm from './components/RegistrationForm';
import Confirmation from './components/Confirmation';

const App = () => (
  <Router>
    <Routes>
      <Route path="/diplomas" element={<DiplomasList />} />
      <Route path="/diplomas/:diplomaId" element={<DiplomaDetails />} />
      <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  </Router>
);

export default App;
