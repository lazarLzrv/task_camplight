import { useDispatch } from "react-redux";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const setTotalUsers = (payload) => {
        dispatch({
            type: "SET_TOTAL_USERS",
            payload,
        });
    };
    const setCurrentPage = (payload) => {
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload,
        });
    };

    return {
        setTotalUsers,
        setCurrentPage,
    };
};

export default Dispatcher;
