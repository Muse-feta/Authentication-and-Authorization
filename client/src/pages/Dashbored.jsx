import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashbored = () => {

    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const dash = async () => {
        const res = await axios.get("http://localhost:5000/api/user/dashbored");
        if(res.data.status === true) {
            setMessage("hello this is dashbored success")
        }else{
            navigate('/')
        }
    }

    useEffect(() => {
        dash()
    }, []);
  return (
    <div>
      <p>This is, Dashbored.....</p>
      <p>{message}</p>
    </div>
  );
}

export default Dashbored