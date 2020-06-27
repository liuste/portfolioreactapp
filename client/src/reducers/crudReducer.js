export default (state = {}, action) => {
    switch (action.type) {
      case 'POST_INFO':
        return { ...state, fullName: action.payload.fullName, id: action.payload.id, signedIn: true, redirectToReferrer: true };
      case 'GET_INFO':
        return { ...state, fullName: action.payload.fullName, id: action.payload.id, signedIn: action.payload.signedIn, redirectToReferrer: action.payload.redirectToReferrer };
      case 'DELETE_INFO':
        return { ...state, fullName: action.payload.fullName, id: action.payload.id, signedIn: action.payload.signedIn, redirectToReferrer: action.payload.redirectToReferrer };
      default:
        return state;
    }
  };