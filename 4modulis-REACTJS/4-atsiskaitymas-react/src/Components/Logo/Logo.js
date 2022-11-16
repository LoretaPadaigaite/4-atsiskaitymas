import logo from './Image/mountains-logo.png'
import './Logo.css'


export const Logo = () => {
    return (
        <>
            <img className='logo' src={logo} alt=''/>
            <p className='logo-text'>Happy journey</p>
        </>

    )
}