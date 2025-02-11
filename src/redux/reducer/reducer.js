
let initialState = {
    contactList: [],
    searchTerm: '' 
};

function reducer(state=initialState, action) {

    const {type, payload} = action 

    switch(type) {
        case "ADD_CONTACT":
            return {...state, contactList:[
                ...state.contactList, 
                {
                    name: payload.name, 
                    phoneNumber: payload.phoneNumber
                }
            ]}
        case "SET_SEARCH_TERM":  
            return {
                ...state,
                searchTerm: payload
            };
        default:
            return {...state};
    }
}

export default reducer;