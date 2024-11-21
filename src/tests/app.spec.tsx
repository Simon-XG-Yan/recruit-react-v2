import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../app";

describe("App test", () => {
  it("should navigate between Register card form and Menu", () => {
    render(<App />);

    // Check if the Register card form is rendered by default
    expect(screen.getByText("Register card form")).toBeInTheDocument();
    expect(screen.queryByText("Menu")).not.toBeInTheDocument();
    
    // Check form fileds are rendered
    expect(screen.getByLabelText("Credit card number")).toBeInTheDocument();
    expect(screen.getByLabelText("CVC")).toBeInTheDocument();
    expect(screen.getByLabelText("Expiry")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();

    // Check the Submit button is disabled initially
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();


    // Fill the form successfully
    const cardNumberInput = screen.getByLabelText("Credit card number");
    const cvcInput = screen.getByLabelText("CVC");
    const expiryDateInput = screen.getByLabelText("Expiry");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Check the form is not valid if the card number is invalid
    fireEvent.change(cardNumberInput, { target: { value: "12345678" } });
    expect(submitButton).toBeDisabled();

    // Check the form is not valid if the cvc is invalid
    fireEvent.change(cardNumberInput, { target: { value: "1234567812345678" } });
    fireEvent.change(cvcInput, { target: { value: "12" } });
    expect(submitButton).toBeDisabled();

    // Check the form is not valid if the expiry date is invalid
    fireEvent.change(cvcInput, { target: { value: "123" } });
    fireEvent.change(expiryDateInput, { target: { value: "1" } });
    expect(submitButton).toBeDisabled();

    // Check the form is valid if all fields are filled correctly
    fireEvent.change(expiryDateInput, { target: { value: "12/25" } });
    expect(submitButton).toBeEnabled();

    // Click on the Menu button
    fireEvent.click(screen.getByLabelText("Open Menu"));

    // Check if the Menu is rendered
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.queryByText("Register card form")).not.toBeInTheDocument();
    expect(screen.getByText("This is menu content")).toBeInTheDocument();

    // Click on the Back button
    fireEvent.click(screen.getByLabelText("Go Back"));

    // Check if the Register card form is rendered again
    expect(screen.getByText("Register card form")).toBeInTheDocument();
    expect(screen.queryByText("Menu")).not.toBeInTheDocument();
  });
});
