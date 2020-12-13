const initState = {
    game: {},
    screenshots: {},
};

const detailReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
            };
        default:
            return { ...state };
    }
};

export default detailReducer;
