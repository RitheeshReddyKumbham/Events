import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError('');
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (!user) return setError('Invalid email or password');
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/home');
  };

  return (
    <div className='sign_main'>
    <form className="login-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}
