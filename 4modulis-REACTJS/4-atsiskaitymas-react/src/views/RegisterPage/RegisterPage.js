import { useState } from "react";
import { BASE_URL } from "../../Components/Constants/Constants";
import { LoginForm } from "../../Components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import './RegisterPage.css'




const RegisterPage = () => {


  const [error, setError] = useState ('');

  const navigate = useNavigate();

  const handelLogin = (e) => {
      e.preventDefault();
      fetch(`${BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: 'bandymas@gmail.com',
              password: 'bandymas'
          })
      })
      .then(res => res.json())
      .then(data => {
console.log(data);
          if (data.err) {
            setError(data.err);
          } else {
            navigate('/login')
          }
      })
console.log('pavyko login')
  
  }
  
  
    return (
        <>
   
          <h2>Welcome, please login or register.</h2>

          {error && <h3>{error} !</h3>}

          <form onSubmit={handelLogin}>

          <LoginForm/>

          </form>

       




        </>

    )
}

export default RegisterPage;