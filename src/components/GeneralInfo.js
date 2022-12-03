import React, { useState } from "react";
import "../styles/main.css";

// This component provides a form for the user to enter their general info,
// such as their name, email, and phone number
function GeneralInfo({ generalInfo, setGeneralInfo }) {
  // Declare and initialize state variables for the name, email, and phone number
  const [name, setName] = useState(generalInfo.name || "");
  const [email, setEmail] = useState(generalInfo.email || "");
  const [phone, setPhone] = useState(generalInfo.phone || "");

  // This function is called when the user submits the form
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Set the general info in the parent component with the new values
    setGeneralInfo({ name, email, phone });
  };

  return (
    <form className="cv-section" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          className="form-input"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          className="form-input"
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <input className="form-button" type="submit" value="Submit" />
    </form>
  );
}

export default GeneralInfo;
