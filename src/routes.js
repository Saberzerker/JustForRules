import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import RegistrationForm from './components/Auth/RegistrationForm';
import ActivityVisualization from './components/Dashboard/ActivityVisualization';
import ExerciseHistory from './components/Dashboard/ExerciseHistory';
import ExerciseTracker from './components/Tracking/ExerciseTracker';
import ProfileForm from './components/Profile/ProfileForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Default route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<ExerciseHistory />} />
        <Route path="/visualizations" element={<ActivityVisualization />} />
        <Route path="/track" element={<ExerciseTracker />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;