import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

export const loadDetail = (gameId: string) => async (dispatch: any) => {
    const detailData = await axios.get(gameDetailsURL(gameId));
    const screenshotData = await axios.get(gameScreenshotsURL(gameId));

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screenshots: screenshotData.data,
        },
    });
};
