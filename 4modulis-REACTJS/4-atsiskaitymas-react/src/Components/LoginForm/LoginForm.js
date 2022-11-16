import './LoginForm.css'

export const LoginForm = () => {
    return (
        <div className="loginform" >
            <input type='email' placeholder="Email" />
            <input type='password' placeholder='Password'/>
            <button  type='submit'>Submit</button>
        </div>

    )
}