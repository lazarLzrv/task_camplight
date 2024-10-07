// pagination

const initialState = {
    currentPage: 1,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: payload,
            };

        default:
            return state;
    }
}
