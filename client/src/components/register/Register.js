import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../firebase';
import './Register.css';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [select, setSelect] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password, select);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/dashboard');
  }, [user, loading, history]);
  return (
    <div className='register'>
      <div className='register__container'>
        <input
          type='text'
          className='register__textBox'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />
        <input
          type='text'
          className='register__textBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail Address'
        />
        <input
          type='password'
          className='register__textBox'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <label for='levels'>Choose access level:</label>
        <select
          id='levels'
          name='levels'
          // value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value='superuser'>Super User</option>
          <option value='admin'>Admin</option>
          <option value='user'>User</option>
        </select>
        <button className='register__btn' onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to='/'>Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
