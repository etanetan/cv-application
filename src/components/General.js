// General.js

import React, { useState } from "react";

const General = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
  };

  return (
    <div style={generalStyle}>
      <div style={generalInfo}>
        <h1>{info.name}</h1>
        <div>{info.email}</div>
        <div>{info.phone}</div>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h3>General Info</h3>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          value={info.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={info.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="tel"
          placeholder="123-456-7890"
          value={info.phone}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const generalStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "10rem",
  paddingRight: "10rem",
  height: "20vh",
};
const generalInfo = {
  display: "flex",
  flexDirection: "column",
  height: "80%",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
};

export default General;
