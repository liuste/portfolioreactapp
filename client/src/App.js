import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from './history'
import users from './apis/users.js'
import Profile from './pages/Profile.js';
import CreateProfile from './pages/CreateProfile.js';
import EnterInfo from './pages/EnterInfo.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fullName: "", id: "", signedIn: false, redirectToReferrer: false};
    }

    /*Helper function
    *gets name list from db.json, map through each user to see if the name matches user provided name
    */
    getIDHelper = async name => {
        const response = await users.get('/users'); 
        let found = false;
        response.data.map( (user) => {  
            if (user.fullName === name.fullName)
            {
                found = true; 
                this.setState({fullName : name.fullName, id: user.id, signedIn: true, redirectToReferrer: true});  
            }   
        })
        if (found != true)
        {
            alert('name not found');
        }      
    }

    //Post name into db.json
    onPostSubmit = async name => {
        await users.post('/users', name);
        this.getIDHelper(name);
    };

    //Get name from db.json
    onGetSubmit = async name => {
        this.getIDHelper(name);
   };

    render() {
        if (this.state.redirectToReferrer === true) {   
            history.push('/profile');
        }
        
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Route exact
                            path="/form" 
                            render={(props) => 
                                <div className="ui container"> 
                                    <CreateProfile {...props} onSubmit={this.onPostSubmit}/>
                                </div>
                            }
                        />
                        <Route exact
                            path="/profile" 
                            render={(props) => <Profile {...props} info={this.state}/> }
                        />
                        <Route exact
                            path="/login" 
                            render={(props) => 
                                <div className="ui container"> 
                                    <EnterInfo {...props} onSubmit={this.onGetSubmit} />
                                </div>}
                        />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;