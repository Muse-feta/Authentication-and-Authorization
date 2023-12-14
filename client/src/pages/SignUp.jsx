import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {

  const navigate = useNavigate()
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {e.preventDefault();
    setSignUp({...signUp, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/register", {
        username: signUp.username,
        email: signUp.email,
        password: signUp.password,
      });
      console.log(res);
      alert(res.data.data)
      setSignUp({
        username: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form
        className="w-[50%] p-9 rounded-xl text-center mt-[10%]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[#0e0e0e] font-mono text-2xl font-bold">
          Login Your Account
        </h1>

        <br />
        <input
          className="outline-none border-l-4 border-[#0c0f2f] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[250px] sm:w-[65%]"
          type="text"
          name="username"
          placeholder="User Name"
          value={signUp.username}
          onChange={handleChange}
        />

        <br />
        <input
          className="outline-none border-l-4 border-[#0c0f2f] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[250px] sm:w-[65%]"
          type="text"
          name="email"
          placeholder="Email"
          value={signUp.email}
          onChange={handleChange}
        />

        <br />
        <input
          className="outline-none border-l-4 border-[#0c0f2f] p-4 bg-[#f7f7f7] py-3 px-3 w-[250px] sm:w-[65%]"
          type="password"
          name="password"
          placeholder="Password"
            value={signUp.password}
          onChange={handleChange}
        />
        <br />
        <div className="block">
          <button
            className="p-3 hover:bg-[#171d5c] bg-[#0c0f2f] text-white sm:m-3 rounded-2xl w-[250px] sm:w-[65%] mt-3"
            type="submit"
          >
            Sign Up
          </button>
          <br />
          <Link className="hover:underline " to="/login">
            <p className="flex items-center justify-center font-semibold ml-20px pl-[130px] sm:pl-0">
              alredy have an account
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp