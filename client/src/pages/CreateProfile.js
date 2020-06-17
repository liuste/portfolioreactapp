import React from 'react';

class CreateProfile extends React.Component {
    
    state = {fullName: ""};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h4 class="ui dividing header">Create a Profile</h4>
                    <div className="field">
                        <label>Enter fullname </label>
                        <input 
                            type="text" 
                            value={this.state.fullName} 
                            onChange={(e) => this.setState({ fullName: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProfile;