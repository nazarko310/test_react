export const urlApi = 'https://rickandmortyapi.com/api';

export const urlApiCharacters = `${urlApi}/character`;
export const urlApiCharactersPage = (page) => `${urlApiCharacters}${page}`;
export const urlApiCharacterID = (id) => `${urlApiCharacters}/${id}`

export const urlApiLocation = `${urlApi}/location`;
export const urlApiLocationPage = (page) => `${urlApiLocation}${page}`;
export const urlApiLocationID = (id) => `${urlApiLocation}/${id}`

export const urlApiEpisode = `${urlApi}/location`;
export const urlApiEpisodePage = (page) => `${urlApiEpisode}${page}`;
export const urlApiEpisodeID = (id) => `${urlApiEpisode}/${id}`


export const getCharacters = async (search) => {
    const response = await fetch(`${urlApi}/character${search}`);
    return response.json();
}

export const getLocation = async (search) => {
    const response = await fetch(`${urlApi}/location${search}`);
    return response.json();
}
export const getEpisode = async (search) => {
    const response = await fetch(`${urlApi}/episode${search}`);
    return response.json();
}

export const getLocationByCharacterId = async (url) => {
    const response = await fetch(`${url}`);
    return response.json();
}

export const getCharacterResidentsByLocationId = async (url) => {
    const response = await fetch(`${url}`);
    return response.json();
}
export const getCharacterByEpisodeId = async (url) => {
    const response = await fetch(`${url}`);
    return response.json();
}
export const getSearchCharacters = async (value) => {
    const response = await fetch(`${urlApi}/character&query=+${value}`);
    return response.json();
}

