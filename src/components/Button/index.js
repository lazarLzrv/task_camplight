import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Index = ({ className, onClick, link, children, type = "button" }) => {
    return (
        <>
            {link ? (
                <Link className={`${className ? className : ""} ${styles.btn}`} to={link}>
                    {children}
                </Link>
            ) : (
                <button
                    type={type}
                    className={`${className ? className : ""} ${styles.btn}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Index;
