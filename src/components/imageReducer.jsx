// imageReducer.js
const initialState = {
    uploadedImage: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_IMAGE':
        return {
          ...state,
          uploadedImage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default imageReducer;