export const Jwttoken = (data) => {
    return {
        type: 'Token',
        payload: data
    }
}