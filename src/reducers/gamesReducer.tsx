const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

const gamesReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
