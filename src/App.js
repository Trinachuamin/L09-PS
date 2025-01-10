import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CoursesList from './components/CoursesList';
import CourseDetails from './components/CourseDetails';
import ModuleDetails from './components/ModuleDetails';
import Register from './components/Register';
import Confirmation from './components/Confirmation';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CoursesList />}>
                    <Route path=":courseId" element={<CourseDetails />}>
                        <Route path=":moduleId" element={<ModuleDetails />} />
                    </Route>
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </Router>
    );
}

export default App;
