import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import Button from "../../components/Button";
import MainTitle from "../../components/MainTitle";
import Pagination from "../../components/Pagination";

import DispatcherPopUp from "../../store/dispatchers/popup";
import DispatcherPagination from "../../store/dispatchers/pagination";

import styles from "./styles.module.scss";

import { data } from "./sampleData";

const Index = () => {
    const { togglePopUp } = DispatcherPopUp();
    const { setTotalUsers } = DispatcherPagination();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(data);

    useLayoutEffect(() => {
        if (searchTerm.length === 0) {
            setTotalUsers(data.length);
        } else {
            setTotalUsers(filteredUsers.length);
        }
    }, [filteredUsers, searchTerm]);

    const { currentPage } = useSelector((state) => state.pagination);

    useEffect(() => {
        const currentBatch = currentPage > 1 ? (currentPage - 1) * 10 : currentPage;
        const visibleUsers = data.slice(currentBatch - 1, currentBatch + 9);
        setFilteredUsers(visibleUsers);
    }, [currentPage]);

    const handleSearch = (event) => {
        const { value } = event.target;

        setSearchTerm(value);

        if (value) {
            const filteredData = data.filter(({ name }) =>
                name.toLowerCase().includes(value.toLowerCase())
            );

            setFilteredUsers(filteredData);
        } else {
            setFilteredUsers(data);
        }
    };

    return (
        <div className={styles.container}>
            <MainTitle>transfers list</MainTitle>

            <Button link='/create' className={styles.create}>
                <FaPlusCircle />
            </Button>

            <input
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchInput}
            />

            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map(({ name, email, phone, id }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>
                                    <div className={styles.btn_wrapper}>
                                        <Button link={`/edit/${id}`} className={styles.edit}>
                                            <FaPen />
                                        </Button>
                                        <Button
                                            className={styles.delete}
                                            onClick={() =>
                                                togglePopUp({
                                                    open: true,
                                                    id,
                                                })
                                            }
                                        >
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default Index;
