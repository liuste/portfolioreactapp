import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import history from '../history';
import { Link } from 'react-router-dom';

//Profile displays the user profile
const Profile = (props) => {

    function openModal(e) {
        history.push('/delete')
    }    
    return (
        <StyledWrapper>
           <div className="name">{props.info.fullName}
                <div className="right floated content">
                    <button className="ui button negative" onClick={openModal}>
                        Delete
                    </button>
                </div>                       
            </div> 
            <Link to="/" className="item">
                Click here to go back to home page.
            </Link>
            <Button className="resume-btn" variant="contained" color="primary">
                <a href="https://imgur.com/5B5b2FR">View Resume</a>
            </Button>   
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: relative;
    left: 50vw;
    .name{
        margin: 0;
    }
    .resume-btn{
        
        position: relative;
        left: 25vw;
    }
    @media all and (max-width: 450px){
        position: relative;
        left: 20vw;
        .name{
            margin: 0;
            font-size: 20px;
        } 
        .resume-btn{
            font-size:8px; 
            position: relative;
            left: 25vw;
        }
    }
`
    
export default Profile;
