import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from './history'
import EnterInfo from './pages/EnterInfo.js';
import CreateProfile from './pages/CreateProfile.js';
import DeleteProfile from './pages/DeleteProfile.js';



const App = () => {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route path="/form" exact component={CreateProfile} />
          <Route path="/login" exact component={EnterInfo} />  
          <Route path="/delete/:id" exact component={DeleteProfile} />  
        </Router>
      </div>
    );
  };

export default App;


