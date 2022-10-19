import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';
const SignUp = () => {
    const [error,setError] =useState(null);
    const {createUser} = useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
       const form = e.target;
       const email  = form.email.value;
       const password = form.password.value;
       const confirm = form.confirm.value;
       console.log(email,password,confirm);
       if(password.length < 6){
        setError('Password must be six characters or more');
        return;
       }
       if(password !== confirm){
          setError('your password did not match');
          return;
       }

       createUser(email,password)
       .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
       })
       .catch(error=>console.error(error));
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm Password' required/>
                </div>
                <input className='btn-submit' type="submit" value="signup" />
            </form>
            <p>Already Have an Account? <Link to='/login'> Log In</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;