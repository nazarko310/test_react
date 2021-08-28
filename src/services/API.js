export const urlApi = 'https://rickandmortyapi.com/api';
export const urlApiCharacters = `${urlApi}/character`;
export const urlApiCharactersPage = (page) => `${urlApiCharacters}?page=${page}`;
export const urlApiCharacterID = (id) => `${urlApiCharacters}/${id}`