// swapi
const SWAPI_ROOT = "https://swapi.tech/api/";
export const SWAPI_PEOPLE = "people";
export const SWAPI_FILM = "films";
export const SWAPI_PARAM_PAGE = "?page=";
export const SWAPI_PARAM_SEARCH = "?name=";

export const SWAPI_PARAM_LIMIT = "&limit=10";
export const API_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_FILM = SWAPI_ROOT + SWAPI_FILM;
export const API_PERSON = SWAPI_ROOT + SWAPI_PEOPLE;
export const API_SEARCH = SWAPI_ROOT + SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;


//visualGuide
const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
const GUIDE_PEOPLE = "characters/";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;

export const  INITIAL_ARR_SEARCH = [
    {
        "name": "Luke Skywalker",
        "id": "1",
        "img": "https://starwars-visualguide.com/assets/img/characters/1.jpg"
    },
    {
        "name": "Leia Organa",
        "id": "5",
        "img": "https://starwars-visualguide.com/assets/img/characters/5.jpg"
    },
    {
        "name": "Darth Vader",
        "id": "4",
        "img": "https://starwars-visualguide.com/assets/img/characters/4.jpg"
    },
    {
        "name": "Owen Lars",
        "id": "6",
        "img": "https://starwars-visualguide.com/assets/img/characters/6.jpg"
    },
    {
        "name": "Beru Whitesun lars",
        "id": "7",
        "img": "https://starwars-visualguide.com/assets/img/characters/7.jpg"
    },
    {
        "name": "Biggs Darklighter",
        "id": "9",
        "img": "https://starwars-visualguide.com/assets/img/characters/9.jpg"
    },
    {
        "name": "Obi-Wan Kenobi",
        "id": "10",
        "img": "https://starwars-visualguide.com/assets/img/characters/10.jpg"
    },
    {
        "name": "Anakin Skywalker",
        "id": "11",
        "img": "https://starwars-visualguide.com/assets/img/characters/11.jpg"
    },
    {
        "name": "Wilhuff Tarkin",
        "id": "12",
        "img": "https://starwars-visualguide.com/assets/img/characters/12.jpg"
    },
    {
        "name": "Chewbacca",
        "id": "13",
        "img": "https://starwars-visualguide.com/assets/img/characters/13.jpg"
    }
]