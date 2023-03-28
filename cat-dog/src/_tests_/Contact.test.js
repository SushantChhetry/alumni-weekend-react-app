// __tests__/Contact.test.js

import { render, fireEvent } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact", () => {
  it("updates the form data when the user enters their information", () => {
    const { getByLabelText } = render(<Contact />);

    const nameInput = getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    const messageInput = getByLabelText("Message:");
    fireEvent.change(messageInput, {
      target: { value: "This is a test message" },
    });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john.doe@example.com");
    expect(messageInput.value).toBe("This is a test message");
  });
});
