import { useDispatch } from "react-redux";

const Dispatcher = () => {
    const dispatch = useDispatch();

    const togglePopUp = (payload) => {
        dispatch({
            type: "TOGGLE_POPUP",
            payload,
        });
    };

    return {
        togglePopUp,
    };
};

export default Dispatcher;
