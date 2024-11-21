import React from "react";
import * as styles from "./RegisterCardForm.module.scss";


export const RegisterCardForm: React.FC = () => {
    return (
        <div>        
            <h2>Welcome, User</h2>

            <form>
                <label htmlFor="cardNumber">
                    Credit card number
                </label>
                <input type="text" id="cardNumber" name="cardNumber" />

                <div>
                    <div>
                        <label htmlFor="cvc">
                            CVC
                        </label>
                        <input type="text" id="cvc" name="cvc" />
                    </div>
                    <div>
                        <label htmlFor="expiryDate">
                            Expiry
                        </label>
                        <input type="text" id="expiryDate" name="expiryDate" />
                    </div>
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}