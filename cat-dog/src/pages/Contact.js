import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-wrapper">
      <h1>RSVP</h1>
      <p>Please enter your information</p>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label>Email</label>

        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        ></input>
        <label>Message:</label>

        <textarea
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
