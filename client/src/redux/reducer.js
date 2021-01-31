const initialState={
    jwtToken:null,
    bookName:null,
    userName:null,
    firstName:null,
    email:null,
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
        case 'UserName':
                return {
                        ...state,
                        userName:action.payload
                }
        case 'FirstName':
                return {
                        ...state,
                        firstName:action.payload
                    }
        case 'LastName':
                return {
                    ...state,
                    lastName:action.payload
                }
        case 'Email':
                return {
                    ...state,
                    email:action.payload
                }
        default:
            return{
                ...state,
            }
    }
}