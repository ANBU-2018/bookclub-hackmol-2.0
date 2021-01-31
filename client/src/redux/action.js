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