import React from 'react';
import './dashboard.css';
import { Home, Users, Layers, Book, User, Building, Monitor, Folder, Trash2, Tag, Archive, FileText, Award } from 'lucide-react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>ADMIN</h1>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-item">
            <Home size={20} />
            <span>Home</span>
          </div>
          
          <div className="menu-section">
            <h3>ACADEMICS</h3>
            <div className="menu-item">
              <Users size={20} />
              <span>Accounts</span>
            </div>
            <div className="menu-item">
              <Layers size={20} />
              <span>Sections</span>
            </div>
            <div className="menu-item">
              <Book size={20} />
              <span>Course</span>
            </div>
            <div className="menu-item">
              <User size={20} />
              <span>Professor</span>
            </div>
            <div className="menu-item">
              <Building size={20} />
              <span>Department</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>VIEWS</h3>
            <div className="menu-item">
              <Monitor size={20} />
              <span>Views</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>MODULES AND RESOURCES</h3>
            <div className="menu-item">
              <Folder size={20} />
              <span>Explorer</span>
            </div>
            <div className="menu-item">
              <Trash2 size={20} />
              <span>Trash</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>PRESETS</h3>
            <div className="menu-item">
              <Tag size={20} />
              <span>Categories</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>ARCHIVES</h3>
            <div className="menu-item">
              <Archive size={20} />
              <span>Archives</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>QUIZ & EXAMINATION</h3>
            <div className="menu-item">
              <FileText size={20} />
              <span>Quiz</span>
            </div>
            <div className="menu-item">
              <Award size={20} />
              <span>Exam</span>
            </div>
          </div>
          
          <div className="menu-section">
            <h3>QUIZ & EXAMINATION SCORES</h3>
            <div className="menu-item">
              <FileText size={20} />
              <span>Quiz Scores</span>
            </div>
            <div className="menu-item">
              <Award size={20} />
              <span>Exam Scores</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <div className="top-bar">
          <div className="logo">
            <h2>Learn<span>IT</span></h2>
          </div>
          <div className="user-info">
            <span>ADMIN ADMIN</span>
            <div className="user-avatar">
              <User size={24} />
            </div>
          </div>
        </div>
        
        <div className="content-area">
          <div className="building-image">
            {/* Building image would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;