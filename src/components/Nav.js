import React from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Nav=()=>{
    const navigate=useNavigate();
    const auth = localStorage.getItem("user");
    
  const user = auth ? JSON.parse(auth) : null;
//   console.log('user name: ',user.name)
  console.log('in nav bar val of user is: ',user)
    
    const logout=()=>{
        localStorage.clear();
        navigate("/signup");
    }
 
    return (
        <div style={{background:'skyblue'}}>
            <img src='https://www.indiatravelforum.in/attachments/beautiful-andaman-jpg.886/' alt='logo' className='logo'></img>
           { 
           auth ? <ul className='nav-ul'>
                <li><Link to='/'> Home</Link></li>
                <li><Link to='/add'> Add Product</Link></li>
                <li><Link to='/update'> Update Product</Link></li>
                <li><Link to='/profile'> Profile</Link></li> 
                <li><Link onClick={logout} to='/signup'>Logout ({user.name})</Link></li> 
                
            </ul>:
            <ul className='nav-ul nav-right'>
                <li><Link to='/signup'> Sign Up</Link></li> 
                <li>{<Link to='/login'> Login</Link>}</li>
                </ul>
                }
        </div>
    )
}

export default Nav