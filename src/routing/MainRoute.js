import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";

const MainRouter = () => {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <Routes>
                {PublicRoutes.map((item) => {
                    const { path } = item;
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<item.component navigate={navigate} />}
                        />
                    );
                })}

                <Route path='*' element={<h1>Not found!</h1>} />
            </Routes>
        </div>
    );
};

export default MainRouter;
