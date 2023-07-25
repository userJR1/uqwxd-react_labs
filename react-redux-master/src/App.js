import React from 'react';
import MainPanel from './components/MainPanel';

function App() {
  return (
      <div className="container mt-5 px-3 py-4 text-center grey-bg">
          <div className="row">
              <div className="col">
                <h3 className="h3 display-1">React-Redux Prototype</h3>
              </div>
          </div>
          
          <div className="row">
              <div className="col">
              <MainPanel/>
              </div>
          </div>
        
      </div>
    );
}

export default App;
