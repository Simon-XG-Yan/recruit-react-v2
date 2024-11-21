import React, { useState, useEffect } from "react";
import * as styles from "./RegisterCardForm.module.scss";
import { dummyUsers, User } from "../../data/dummyUsers";


export const RegisterCardForm: React.FC = () => {
    // This is a dummy implementation of a user state
    const [currentUser, setCurrentUser] = useState<User | null>(null);  

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * dummyUsers.length);
        setCurrentUser(dummyUsers[randomIndex]);
    }, []);

    return (
        <div className={styles.registerCardForm}>        
            <h2>Welcome, {currentUser ? `${currentUser.firstName}` : "User"}</h2>

            <form className={styles.form}>
                <label htmlFor="cardNumber" className={styles.label}>
                    Credit card number
                </label>
                <input type="text" id="cardNumber" name="cardNumber" className={styles.input} placeholder="1234 5678 9012 3456" />

                <div className={styles.cvcExpiryDate}>
                    <div>
                        <label htmlFor="cvc" className={styles.label}>
                            CVC
                        </label>
                        <input type="text" id="cvc" name="cvc" className={styles.input} placeholder="123" />
                    </div>
                    <div>
                        <label htmlFor="expiryDate" className={styles.label}>
                            Expiry
                        </label>
                        <input type="text" id="expiryDate" name="expiryDate" className={styles.input} placeholder="MM/YY" />
                    </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    )
}