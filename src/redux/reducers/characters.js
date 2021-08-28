const initialState = {
    charactersStore: [],
    infoStore: {},
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {...state, charactersStore: action.payload}
        case 'LOADING':
            return {...state, loading: true}
        case 'DONE':
            return {...state, loading: false}
        case 'SET_INFO':
            return {...state, infoStore: action.payload}
        default:
            return {...state}
    }
}
