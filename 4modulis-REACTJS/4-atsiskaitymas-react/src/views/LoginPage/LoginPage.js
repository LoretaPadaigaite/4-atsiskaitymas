import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Components/Constants/Constants";
import { OuterNavigation } from "../../Components/Navigation/OuterNavigation";


const LoginPage = ({setUserLoggedIn}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState ('');


  const navigate = useNavigate();


  const handleEmail = (e) => {
      setEmail(e.target.value);
  }

  const handlePassword = (e) => {
      setPassword(e.target.value);

  }


  const handleLogin = (e) => {
      e.preventDefault();
      
      fetch(`${BASE_URL}/auth/login`, {
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
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setEmail('');
          setPassword('');
          setUserLoggedIn(true);
          setError('')
          navigate('/');
        }
      })
      .catch(err => alert(err));
  };
  
    return (
        <>

          <OuterNavigation/>

          <h2>Please login.</h2>

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
              onClick={handleLogin} 
              type='submit'>
                Login</button>

          </form>

        </>

    )
}

export default LoginPage;