import { useDispatch } from "react-redux";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const setUsersCount = (payload) => {
        dispatch({
            type: "SET_USERS_COUNT",
            payload,
        });
    };
    const deleteUser = (payload) => {
        dispatch({
            type: "DELETE_USER",
            payload,
        });
    };
    const updateUsersList = (payload) => {
        dispatch({
            type: "UPDATE_USERS_LIST",
            payload,
        });
    };

    return {
        setUsersCount,
        deleteUser,
        updateUsersList,
    };
};

export default Dispatcher;
