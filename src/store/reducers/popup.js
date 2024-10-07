// popup

const initialState = {
    open: false,
    id: 0,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "TOGGLE_POPUP":
            const { open, id } = payload;
            return {
                ...state,
                open: open,
                id: id,
            };

        default:
            return state;
    }
}
