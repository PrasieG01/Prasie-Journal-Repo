import React from 'react';
import InteractiveDesk from '../components/InteractiveDesk'; 

function Home({ onNavigate }) {
  return (
    <div className="app-wrapper light-mode">
      <div className="main-page-wrapper">
        
        {/* Intro Section... */}
        
        {/* THE DESK */}
        <div className="desk-section" style={{ marginTop: '50px', marginBottom: '100px' }}>
          <InteractiveDesk onNavigate={onNavigate} />        
        </div>

        {/* About Preview Section... */}

      </div>
    </div>
  );
}

export default Home;