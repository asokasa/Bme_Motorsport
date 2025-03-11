import React, { useState } from "react";
import styles from "./SignUpForm.module.css"; // Import the CSS module

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [isButtonActive, setIsButtonActive] = useState(false); // Track button state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const { firstName, lastName, email } = formData;

        if (firstName && lastName && email) {
            setIsButtonActive(true); // Activate button animation
            setTimeout(() => {
                setIsButtonActive(false); // Reset button after animation
            }, 3000);
        } else {
            alert("Please fill out all the fields.");
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Iratkozz fel hírlevelünkre!</h2>
            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.nevek}>


                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Vezetéknév (Last Name)"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Keresztnév (First Name)"
                        className={styles.input}
                    />

                </div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={styles.input_email}

                />
                <button
                    type="submit"
                    id="btn"
                    className={`${styles.button} ${isButtonActive ? styles.active : ""}`}
                >
                    <p id="btnText" className={styles.buttonText}>
                        {isButtonActive ? "Feliratkozva" : "Feliratkozás"}
                    </p>
                    <div className={styles.checkBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
