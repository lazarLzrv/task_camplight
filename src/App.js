import PopUp from "./components/PopUp";
import MainRoute from "./routing/MainRoute";
import { BrowserRouter } from "react-router-dom";

import "./styles/globals.scss";
function App() {
    return (
        <BrowserRouter>
            <MainRoute />
            <PopUp />
        </BrowserRouter>
    );
}

export default App;
