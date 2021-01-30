const initialState={
    jwtToken:null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Token':
            return {
                ...state,
                jwtToken: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}