import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import Dispatcher from "../../store/dispatchers/pagination";

import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

import ButtonPagination from "../ButtonPagination";

import styles from "./styles.module.scss";

const Index = () => {
    const { count, currentPage } = useSelector((state) => state.pagination);
    const { setCurrentPage } = Dispatcher();

    const [pages, setPages] = useState([]);

    console.log(count);

    useLayoutEffect(() => {
        const totalPages = Math.ceil(count / 10);
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        setPages(pages);
    }, [count]);

    return (
        <>
            <ul className={styles.pagination}>
                <li>
                    <ButtonPagination
                        disabled={currentPage === 1}
                        onClick={() => {
                            setCurrentPage(1);
                        }}
                    >
                        <FaAngleDoubleLeft />
                    </ButtonPagination>
                </li>

                <li>
                    <ButtonPagination
                        disabled={currentPage === 1}
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                    >
                        <FaAngleLeft />
                    </ButtonPagination>
                </li>

                {pages.map((item, i) => {
                    return (
                        <li>
                            <ButtonPagination
                                key={item}
                                className={currentPage === i + 1 ? styles.current : ""}
                                onClick={() => {
                                    setCurrentPage(i + 1);
                                }}
                            >
                                {item}
                            </ButtonPagination>
                        </li>
                    );
                })}
                <li>
                    <ButtonPagination
                        disabled={currentPage === pages.length}
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        <FaAngleRight />
                    </ButtonPagination>
                </li>

                <li>
                    <ButtonPagination
                        disabled={currentPage === pages.length}
                        onClick={() => {
                            setCurrentPage(pages.length);
                        }}
                    >
                        <FaAngleDoubleRight />
                    </ButtonPagination>
                </li>
            </ul>
        </>
    );
};

export default Index;
