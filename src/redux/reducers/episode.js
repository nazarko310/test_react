const initialState = {
    episodeStore: [],
    infoStore: {},
}

export const episodeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EPISODE':
            return {...state, episode: action.payload}

        case 'SET_INFO_EPISODE':
            return {...state, info: action.payload}

        default:
            return {...state}
    }
}
