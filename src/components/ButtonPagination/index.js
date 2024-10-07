import React from "react";

import styles from "./styles.module.scss";

const Index = ({ className, onClick, children, disabled }) => {
    return (
        <>
            <button
                type='button'
                disabled={disabled}
                className={`${className ? className : ""} ${styles.btn}`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
};

export default Index;
