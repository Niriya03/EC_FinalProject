import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="badge">EC Final Project</div>
        <div className="group-number">3</div>
        <div className="group-label">Group</div>
        <div className="divider"></div>
        <div className="team-label">Team Members</div>
        <div className="members">
          <div className="member">
            <div className="avatar avatar-1">DG</div>
            <div className="member-name">Dhairya Gopalbhai Rana</div>
          </div>
          <div className="member">
            <div className="avatar avatar-2">N</div>
            <div className="member-name">Niriya</div>
          </div>
        </div>
        <div className="footer">Cloud Computing · Jenkins · AWS ECS</div>
      </div>
    </div>
  );
}

export default App;