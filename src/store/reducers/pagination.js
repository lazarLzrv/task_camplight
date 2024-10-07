// pagination

const initialState = {
    count: 0,
    currentPage: 1,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_TOTAL_USERS":
            return {
                ...state,
                count: payload,
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: payload,
            };

        default:
            return state;
    }
}
