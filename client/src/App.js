import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from './history'
import users from './apis/users.js'
import CreateProfile from './pages/CreateProfile.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fullName: ""};
    }

    onPostSubmit = async name => {
        await users.post('/users', name);
    };

    render() {
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
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;