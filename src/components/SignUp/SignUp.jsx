import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError('');
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === form.email)) {
      setError('User already exists');
      return;
    }
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
