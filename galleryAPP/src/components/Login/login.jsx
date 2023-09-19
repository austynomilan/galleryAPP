import './login.scss'
import { FaUser } from 'react-icons/fa';

export default function login() {
  return (
    <>
    <div className='login_container'>
    </div>
    <div className='login_card'>
        <div className="user">
         <FaUser size={30} />   
        </div>
        <form action="">
            <section>
            <span>Email</span><br /><input type="text" autoFocus/>
            <p>Invalid Email. Pls input a valid mail</p>
        </section>
        <section>
        <span>Password</span><br /><input type="text" />
        <p>This Password is not recognized</p>
        </section>
        </form>
      </div>
           
    </>
    
  )
}
