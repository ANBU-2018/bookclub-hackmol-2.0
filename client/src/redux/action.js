export const Jwttoken = (data) => {
    return {
        type: 'Token',
        payload: data
    }
}

export const Book = (data) => {
    return {
        type: 'Book',
        payload: data
    }
}
export const UserName = (data) => {
    return {
        type: 'UserName',
        payload: data
    }
}
export const Email = (data) => {
    return {
        type: 'Email',
        payload: data
    }
}
export const FirstName = (data) => {
    return {
        type: 'FirstName',
        payload: data
    }
}
export const LastName = (data) => {
    return {
        type: 'LastName',
        payload: data
    }
}