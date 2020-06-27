import React from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../actions';
import InputForm from './InputForm.js';

class CreateProfile extends React.Component {
    
    onSubmit = formValues => {
        this.props.createProfile(formValues);
        console.log(formValues.fullName);
        
    };

    render() {
        console.log(this.props.name);
        return (
            
                <InputForm onSubmit={this.onSubmit} /> 
                
        );
       
    }
}

const mapStateToProps = state => {
    return { name: state.name.fullName } 
};

export default connect(
    mapStateToProps, 
    { createProfile }
)(CreateProfile);
