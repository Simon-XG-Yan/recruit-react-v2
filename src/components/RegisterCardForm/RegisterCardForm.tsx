import React from "react";
import * as styles from "./RegisterCardForm.module.scss";


export const RegisterCardForm: React.FC = () => {
    return (
        <div className={styles.registerCardForm}>        
            <h2>Welcome, User</h2>

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