import React from 'react';
import { connect } from 'react-redux';
import { deleteProfile } from '../actions';

class DeleteProfile extends React.Component {
    componentDidMount(){
        this.props.deleteProfile("john");
    }

    render() {
        console.log(this.props.name);
        return (
            <div>
                Inside Deletename 
            </div>    
        );
       
    }
}

const mapStateToProps = state => {
    return { name: state.name.fullName } 
};

export default connect(mapStateToProps, { deleteProfile })(DeleteProfile);