import { useState } from "react";
import { BASE_URL } from "../../Components/Constants/Constants";
import { useNavigate } from "react-router-dom";
import './RegisterPage.css'
import { OuterNavigation } from "../../Components/Navigation/OuterNavigation";


const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] =useState(false)
  const [error, setError] = useState (false);
  const navigate = useNavigate();


  const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false)
  }

  const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false)
  }


  const handleRegister = (e) => {
      e.preventDefault();
      
      fetch(`${BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email:'',
            password:''
          })
      })
      .then(res => res.json())
      .then( data => {
          if (data.err) {
            setError(data.err);
          } else {
            setEmail('');
            setPassword('');
            setSubmitted(true)
            navigate('/login')
          }
      })  
  }
    
    return (
        <>
   
          <OuterNavigation/>

          <h2>Welcome, please login or register.</h2>

          {error && <h3> {error} ! </h3>}

          <form className="registerform">

            <input 
              onChange={handleEmail} 
              value={email} 
              type='email' 
              placeholder="Email" />
            <input 
              onChange={handlePassword} 
              value={password} 
              type='password' 
              placeholder='Password'/>
            <button 
              onClick={handleRegister} 
              type='submit'>
                Register</button>
  
          </form>

        </>

    )
}

export default RegisterPage;