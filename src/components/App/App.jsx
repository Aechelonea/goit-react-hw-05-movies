import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../routes/routes';

const App = () => {
  return (
    <Router basename='goit-react-hw-05-movies'>
      <AppRoutes />
    </Router>
  );
};

export default App;
