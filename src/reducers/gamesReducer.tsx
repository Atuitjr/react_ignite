const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: [],
};

const gamesReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            console.log('i enteres');
            return { ...state, popular: action.payload.popular };
        default:
            return { ...state };
    }
};

export default gamesReducer;
