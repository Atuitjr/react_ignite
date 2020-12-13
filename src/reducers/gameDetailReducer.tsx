const initState = {
    game: {},
    screenshots: {},
    isLoading: true,
};

const detailReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false,
            };
        case 'LOADING_DETAIL':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default detailReducer;
