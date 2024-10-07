import React from "react";

import styles from "./styles.module.scss";

const Index = ({ children }) => {
    return (
        <>
            <h3 className={styles.title}>{children}</h3>
        </>
    );
};

export default Index;
