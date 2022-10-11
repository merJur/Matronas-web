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
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                   </button>
                 </div>
            </nav>
        </div>
    );
};

export default Navbar;