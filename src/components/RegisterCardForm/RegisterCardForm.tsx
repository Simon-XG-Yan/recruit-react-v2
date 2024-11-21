import React, { useState, useEffect } from "react";
import * as styles from "./RegisterCardForm.module.scss";
import { dummyUsers, User } from "../../data/dummyUsers";


export const RegisterCardForm: React.FC = () => {
    // This is a dummy implementation of a user state
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cvc, setCvc] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    // Randomly select a user from the dummy users
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * dummyUsers.length);
        setCurrentUser(dummyUsers[randomIndex]);
    }, []);

    useEffect(() => {
        setIsFormValid(
            cardNumber.length === 16 &&
            cvc.length === 3 &&
            /^[0-1][0-9]\/[0-9]{2}$/.test(expiryDate));
    }, [cardNumber, cvc, expiryDate]);

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 16) {
            setCardNumber(value);
        }
    }

    const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 3) {
            setCvc(value);
        }
    };

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length <= 4) {
            if (value.length <= 2) {
                setExpiryDate(value);
            } else {
                setExpiryDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className={styles.registerCardForm}>
            <h2>Welcome, {currentUser ? `${currentUser.firstName}` : "User"}</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="cardNumber" className={styles.label}>
                    Credit card number
                </label>
                <input
                    type="text" 
                    id="cardNumber" 
                    name="cardNumber" 
                    className={styles.input} 
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange} 
                />

                <div className={styles.cvcExpiryDate}>
                    <div>
                        <label htmlFor="cvc" className={styles.label}>
                            CVC
                        </label>
                        <input 
                            type="text" 
                            id="cvc" 
                            name="cvc" 
                            className={styles.input} 
                            placeholder="123"
                            value={cvc}
                            onChange={handleCvcChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="expiryDate" className={styles.label}>
                            Expiry
                        </label>
                        <input 
                            type="text" 
                            id="expiryDate" 
                            name="expiryDate" 
                            className={styles.input} 
                            placeholder="MM/YY" 
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className={`${styles.submitButton} ${isFormValid ? styles.submitButtonActive : styles.submitButtonDisabled}`}
                    disabled={!isFormValid}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}