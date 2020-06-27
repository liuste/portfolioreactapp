import React from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../actions';
import InputForm from './InputForm.js';

class EnterInfo extends React.Component {

    onSubmit = formValues => {
    
        this.props.getInfo(formValues);
    };

    render() {
        console.log(this.props.name);
        return (
            <div>
                <InputForm onSubmit={this.onSubmit} />  
            </div>    
        );
       
    }
}

const mapStateToProps = state => {
    return { name: state.name.fullName } 
}

export default connect(
    mapStateToProps,
    { getInfo }
)(EnterInfo);