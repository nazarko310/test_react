const initialState = {
    locationStore: [],
    infoStore: {}

}

export const locationReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {...state, charactersStore: action.payload}
        case 'SET_INFO_LOCATION':
            return {...state, infoStore: action.payload}
        default:
            return {...state}
    }
}
