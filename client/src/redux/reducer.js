const initialState={
    jwtToken:null,
    bookName:null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Token':
            return {
                ...state,
                jwtToken: action.payload
            }
        case 'Book':
                return {
                    ...state,
                    bookName:action.payload
                }
        default:
            return{
                ...state,
            }
    }
}