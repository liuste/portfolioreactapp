import React from 'react';
import { Link } from 'react-router-dom';

//EnterInfo displays a form for user to enter their name to get to their profile
class EnterInfo extends React.Component {
    
    state = {fullName: ""};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h4 class="ui dividing header">Look Up Profile</h4>
                    <div className="field">
                        <label>Enter fullname </label>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={(e) => this.setState({ fullName: e.target.value })}
                        />
                    </div>
                </form>

                <Link to="/form" className="item">
                    If you need to create a profile, click here.
                </Link>    
            </div>
        );  
    }
}

export default EnterInfo;