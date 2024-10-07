import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../../components/Button";
import MainTitle from "../../components/MainTitle";

import userSchema from "../../validations/userSchema";

import styles from "./styles.module.scss";

const Index = () => {
    const initial = { name: "", email: "", phone: "" };

    const [state, setState] = useState(initial);

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={styles.container}>
            <MainTitle>
                <Button link='/' className={styles.back}>
                    <FaArrowLeft />
                </Button>
                Create User
            </MainTitle>

            <Formik initialValues={state} validationSchema={userSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className={styles.input_group}>
                            <label>Name:</label>
                            <Field type='text' name='name' />
                            <ErrorMessage name='name' component='div' />
                        </div>

                        <div className={styles.input_group}>
                            <label>Email:</label>
                            <Field type='email' name='email' />
                            <ErrorMessage name='email' component='div' />
                        </div>

                        <div className={styles.input_group}>
                            <label>Phone:</label>
                            <Field type='text' name='phone' />
                            <ErrorMessage name='phone' component='div' />
                        </div>

                        <Button type='submit' disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Index;
