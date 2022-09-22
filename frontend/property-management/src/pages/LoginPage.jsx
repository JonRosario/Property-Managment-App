import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => [
    setFormData({ ...formData, [e.target.id]: e.target.value }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/login`, formData)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          navigate("/");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default LoginPage