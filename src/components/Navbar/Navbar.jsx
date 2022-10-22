import React from 'react';
import { Link } from 'react-router-dom';
import('../Navbar/Navbar.css')
const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-light">
                 <div className="container-fluid">
                   <Link  style={{marginLeft:'5rem'}}className="navbar-brand" to='/'>Home</Link>
                   <Link className="navbar-brand" to='/register'>Register</Link>
                   <Link style={{marginRight:'5rem'}}className='navbar-brand' to='/login'>Login</Link>
                   <Link to="/profile" style={{marginLeft:'5rem'}}className="navbar-brand">Profile</Link>
                   <Link to={"/blogs"} style={{textDecoration:'none'}} className={'navbar-brand'}> Blogs List</Link>
                   <Link to={"/courses"} style={{textDecoration:'none'}} className={'navbar-brand'}> Courses List</Link>  
                 </div>
            </nav>
        </div>
    );
};

export default Navbar;