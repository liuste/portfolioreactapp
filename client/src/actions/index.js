import users from '../apis/users.js'

// Action creator
export const getInfo = (name) => async dispatch => {
    const response = await users.get('/users');
    
    let found = false;
    let info = {};
        response.data.map( (user) => {  
            if (user.fullName === name.fullName)
            {
                found = true; 
                info = {fullName : name.fullName, id: user.id, signedIn: true, redirectToReferrer: true};     
            }   
        })
        if (found != true)
        {
            alert('name not found');
        }      
    dispatch({type: 'GET_INFO', payload: info})
};

export const createProfile = (name) => async dispatch => {
  const response = await users.post('/users', name);
  dispatch({type: 'POST_INFO', payload: response.data})
};

export const deleteProfile = (name) => async (dispatch, getState) => {
  await dispatch(getInfo(name));
  await users.delete(`/users/${getState().name.id}`);
  let info = {fullName : "", id: "", signedIn: false, redirectToReferrer: false};
  dispatch({type: 'DELETE_INFO', payload: info})
};


  