// users

import { data } from "../sampleData";

const initialState = {
    usersCount: 0,
    allUsers: data,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_USERS_COUNT":
            return {
                ...state,
                usersCount: payload,
            };
        case "DELETE_USER":
            return {
                ...state,
                allUsers: state.allUsers.filter((item) => item.id !== payload),
            };
        case "UPDATE_USERS_LIST":
            return {
                ...state,
                allUsers: payload,
            };

        default:
            return state;
    }
}
