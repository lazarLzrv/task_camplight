import React from "react";
import { useSelector } from "react-redux";
import Dispatcher from "../../store/dispatchers/popup";

import { FaCheck } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

import Button from "../Button";

import styles from "./styles.module.scss";

const Index = () => {
    const { togglePopUp } = Dispatcher();

    const { open, id } = useSelector((state) => state.popup);

    return (
        <div className={`${styles.container} ${open ? styles.open : ""}`}>
            <div className={styles.inner}>
                <FaRegTimesCircle
                    className={styles.close}
                    onClick={() =>
                        togglePopUp({
                            open: false,
                            id: 0,
                        })
                    }
                />

                <h5> Are you shure you want to delete this enty ?</h5>

                <div className={styles.buttons}>
                    <div className={styles.btn_wrapper}>
                        <Button className={styles.confirm}>
                            <FaCheck /> yes
                        </Button>

                        <Button
                            className={styles.decline}
                            onClick={() =>
                                togglePopUp({
                                    open: false,
                                    id: 0,
                                })
                            }
                        >
                            <FaBan /> No
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
