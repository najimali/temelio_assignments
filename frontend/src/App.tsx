import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NonprofitForm from './components/NonprofitForm';
import FoundationForm from './components/FoundationForm';
import SendEmailForm from './components/SendEmailForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-nonprofit" element={<NonprofitForm />} />
          <Route path="/new-foundation" element={<FoundationForm />} />
          <Route path="/send-email" element={<SendEmailForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
