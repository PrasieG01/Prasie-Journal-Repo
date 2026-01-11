import React from 'react';
import InteractiveDesk from '../components/InteractiveDesk'; 

function Home() {
  return (
    <div className="app-wrapper light-mode">
      <div className="main-page-wrapper">
        
        {/* Intro Section... */}
        
        {/* THE DESK */}
        <div className="desk-section" style={{ marginTop: '50px', marginBottom: '100px' }}>
           <InteractiveDesk />
        </div>

        {/* About Preview Section... */}

      </div>
    </div>
  );
}

export default Home;