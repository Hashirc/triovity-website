import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import './Signup.css'; // optional styling

// Email validation regex
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Password strength validation
// Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number
const validatePasswordStrength = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return re.test(password);
};

const getPasswordStrengthFeedback = (password) => {
  const feedback = [];
  if (password.length < 8) feedback.push('At least 8 characters');
  if (!/[A-Z]/.test(password)) feedback.push('1 uppercase letter');
  if (!/[a-z]/.test(password)) feedback.push('1 lowercase letter');
  if (!/\d/.test(password)) feedback.push('1 number');
  return feedback.length > 0 ? `Missing: ${feedback.join(', ')}` : 'Strong password';
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordFeedback, setPasswordFeedback] = useState('');

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (pwd) {
      setPasswordFeedback(getPasswordStrengthFeedback(pwd));
    } else {
      setPasswordFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Input validation
    if (!displayName.trim()) {
      setError('Display name is required');
      return;
    }

    if (displayName.trim().length < 2) {
      setError('Display name must be at least 2 characters');
      return;
    }

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    if (!validatePasswordStrength(password)) {
      setError('Password must have 8+ characters, 1 uppercase, 1 lowercase, and 1 number');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim().toLowerCase(), password);
      await updateProfile(userCredential.user, { displayName: displayName.trim() });
      navigate('/dashboard');
    } catch (error) {
      // Don't expose specific error details (security best practice)
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already registered. Please log in or use a different email.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please use a stronger password.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError('Signup failed. Please try again.');
      }
      console.error('Signup error:', error.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page glass">
      <h2 className="text-highlight">Create Account</h2>
      {error && <p className="error" role="alert">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form" noValidate>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          disabled={loading}
          aria-label="Display name"
          maxLength="50"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          aria-label="Email address"
        />
        <div className="password-group">
          <input
            type="password"
            placeholder="Password (min 8 chars, 1 uppercase, 1 lowercase, 1 number)"
            value={password}
            onChange={handlePasswordChange}
            required
            disabled={loading}
            aria-label="Password"
          />
          {passwordFeedback && (
            <p className={`password-feedback ${password && validatePasswordStrength(password) ? 'strong' : 'weak'}`}>
              {passwordFeedback}
            </p>
          )}
        </div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
          aria-label="Confirm password"
        />
        <button type="submit" className="btn btn-primary" disabled={loading || !validatePasswordStrength(password)}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
