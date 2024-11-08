import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { loginApi, registerApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
  const navigate = useNavigate();
  const { role } = useParams(); // Capture the role from the URL params
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem('token');
  const userRole = JSON.parse(localStorage.getItem('userData'))?.role;

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      const redirectUrl = userRole === 'admin' ? '/admin/dashboard' : userRole === 'driver' ? '/driver/dashboard' : '/user/dashboard';
      navigate(redirectUrl);
    }
  }, [isLoggedIn, navigate, userRole]);

//   Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      toast.warning('Please fill the form completely');
      return;
    }

    try {
              // Add console log to check role and userData
      console.log("Attempting to register with role:", role, "and userData:", userData);
     
      const result = await registerApi({ ...userData, role });
      console.log("Registration API response:", result)

      if (result.status === 201) {
        toast.success(`${username} successfully registered as ${role}`);
        setUserData({ username: '', email: '', password: '' });
         // Navigate to the login page
        navigate(`/auth/${role}/login`);
      } else {
        toast.error(result.message || 'Registration failed');
      }
    } catch (error) {
        console.error("Registration error:", error); // Log any errors
        toast.error('Registration failed. Please try again.');
    }
  };

//   Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    console.log("Submitted login data:", userData); 
    if (!email || !password) {
      toast.warning('Please fill the form completely');
      return;
    }

    try {
      const result = await loginApi({ email, password });
      console.log('Login API result:', result); 
      if (result.data && result.data.status === 'success') {
        const { token, data } = result.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(data));

        toast.success('Login successful');

        // Redirect based on role after successful login
        const redirectPath = `/${data.role}/dashboard`;
        navigate(redirectPath);
      } else {
        toast.error(result.data?.message || 'Invalid email or password');
      }
    } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className='container w-75'>
        <h5>
          <Link to={'/'} style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
            <i className="fa-solid fa-arrow-left me-2"></i>BACK TO HOME
          </Link>
        </h5>
        <div style={{ backgroundColor: "lightcyan", opacity: 0.9 }} className='rounded-5 mt-5'>
          <Row>
            <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
              <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="" width={'70%'} />
            </Col>
            <Col md={6} className='p-5 d-flex justify-content-center'>
              <form className='w-100' onSubmit={register ? handleRegister : handleLogin}>
                <h5 className='text-center'>
                  <i className="fa-brands fa-stack-overflow me-3"></i>Eco Track
                </h5>
                {register ? (
                  <>
                    <h6 className='text-center mb-3 mt-3'>Sign Up To Your Account</h6>
                    <input type="text" placeholder='Name' className='form-control rounded' 
                      value={userData.username}
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    />
                  </>
                ) : (
                  <h6 className='text-center mb-3 mt-3'>Sign In As {role.charAt(0).toUpperCase() + role.slice(1)}</h6>
                )}
                <div className='mb-3 mt-3'>
                  <input type="email" placeholder='Email Id' className='form-control rounded'
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                <div className='mb-3'>
                  <input type="password" placeholder='Password' className='form-control rounded'
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                </div>
                <button className='btn btn-warning w-100 rounded' type='submit'>{register ? "REGISTER" : "LOGIN"}</button>
                <p className='mt-3'>
                  {register ? 'Already a User?' : 'Not Registered yet?'}
                  <Link className='ms-2' style={{ textDecoration: 'none' }} to={`/auth/${role}/${register ? 'login' : 'register'}`}>
                    {register ? "LOGIN" : "REGISTER"}
                  </Link>
                </p>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Auth;
