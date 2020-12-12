import axios from 'axios';

const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: [],
};

const gamesReducer = (state: any = initState, action: any) => {
    switch (action) {
        case 'FETCH_GAMES':
            return { ...state };
        default:
            return { ...state };
    }
};

export default gamesReducer;
