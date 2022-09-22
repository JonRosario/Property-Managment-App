import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      alert("Fields cannot be empty");
    } else if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match");
    } else {
      axios
        .post(`http://localhost:8000/signup`, formData)
        .then((res) => {
          console.log(res)
          navigate("/");
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpPage