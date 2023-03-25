import { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const onSubmit = () => {
    alert(`submitted`);
    console.log(name);
    console.log(email);
    console.log(message);
  };
  return (
    <div className="form-wrapper">
      <h1>RSVP</h1>

      <form className="form">
        <label>Full name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => {
            setName(e.target.innerHTML);
          }}
        ></input>
        <label>Email</label>

        <input
          type="email"
          id="email"
          required
          onChange={(e) => {
            setEmail(e.target.innerHTML);
          }}
        ></input>
        <label>Message:</label>

        <textarea
          id="message"
          required
          onChange={(e) => {
            setMessage(e.target.innerHTML);
          }}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
