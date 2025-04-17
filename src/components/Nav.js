import React from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Nav=()=>{
    const navigate=useNavigate();
    const auth = localStorage.getItem("user");
    
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
                <Link onClick={logout} to='/signup'> Logout</Link>
                <Link onClick={logout} to='/signup'> Logout( {JSON.parse(result).user.name})</Link>
               
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