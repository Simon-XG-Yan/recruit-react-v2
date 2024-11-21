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
