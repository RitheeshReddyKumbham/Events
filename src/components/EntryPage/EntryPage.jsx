import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryPage.css';

export default function EntryPage() {
  const navigate = useNavigate();

  return (
    <div className="entry-page">
      <h1>Welcome to EventSphere</h1>
      <p>Discover, plan, and experience amazing events near you.</p>
      <div className="entry-buttons">
        <button className="login" onClick={() => navigate('/login')}>Login</button>
        <button className="signup" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  );
}
