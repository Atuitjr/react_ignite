import axios from 'axios';
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL,
} from '../api';

export const loadGames = () => async (dispatch: any) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results,
        },
    });
};

export const fetchSearch = (gameName: string) => async (dispatch: any) => {
    const searchedData = await axios.get(searchGameURL(gameName));
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: { searched: searchedData.data.results },
    });
};
